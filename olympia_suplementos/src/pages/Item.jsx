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
            />
        </>
    )
}

export default Item