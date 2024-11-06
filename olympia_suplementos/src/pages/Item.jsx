import { useEffect, useContext, useState } from "react";
import Itens from "../components/Itens";
import { useParams } from "react-router-dom";
import { GeneralContext } from "../context/General";
import { api } from "../api/api"


const Item = () => {
    const [produto, setProduto] = useState('')
    const { id } = useParams();
    const {itens, setItens, setOpen} = useContext(GeneralContext)

    const getProduct = async () => {
        try {
            const response = await api.get(`/produtos/${id}`);
            setProduto(response.data);
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
        }
    }

    useEffect(() => {
        getProduct()
    }, [id])

    const handleComprarClick = (produtoId) => {
        let itemAdicionar = { idProduto: produtoId, quantidade: 1 }
        if (produtoId) { 
            const isProdutoNoCarrinho = itens.some((item) => item.idProduto === produtoId);
            if (!isProdutoNoCarrinho) {
                setItens((prevItens) => [...prevItens, itemAdicionar]);
                setOpen(true)
            } else {
                setOpen(true)
            }
        } else {
            console.error("Produto não encontrado.");
        }
    }
    
    const handleLikeClick = async (produtoId) => {
        try {
            const novoNumeroDeLikes = produto.likes + 1;
            const response = await api.patch(`/produtos/${produtoId}`, {
                likes: novoNumeroDeLikes
            })

            setProduto((prevProduto) => ({
                ...prevProduto,
                likes: novoNumeroDeLikes  
            }))
            alert('Obrigado pela sua avaliação!')
            console.log("Produto atualizado com sucesso:", response.data);
        } catch (error) {
            console.error("Erro ao atualizar o produto:", error);
        }
    }

    const handleDeslikeClick = async (produtoId) => {
        try {
            const novoNumeroDeDeslikes = produto.deslikes + 1;
            const response = await api.patch(`/produtos/${produtoId}`, {
                deslikes: novoNumeroDeDeslikes
            })

            setProduto((prevProduto) => ({
                ...prevProduto,
                Deslikes: novoNumeroDeDeslikes 
            }))
            alert('Obrigado pela sua avaliação!')
            console.log("Produto atualizado com sucesso:", response.data);
        } catch (error) {
            console.error("Erro ao atualizar o produto:", error);
        }
    }

    return (
        <>
            <Itens
                key={produto.id}
                id={produto.id}
                imgurl={produto.imgurl}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
                onComprarClick={handleComprarClick}
                onLikeClick={handleLikeClick}
                onDeslikeClick={handleDeslikeClick}
            />
        </>
    )
}

export default Item