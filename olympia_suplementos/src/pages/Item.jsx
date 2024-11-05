import { useEffect, useContext, useState } from "react";
import Itens from "../components/Itens";
import { api } from '../api/api.js'
import { useParams } from "react-router-dom";
import { GeneralContext } from "../context/General";


const Item = () => {
    const [produto, setProduto] = useState('')
    const { id } = useParams();
    const {itens, setItens, setOpen} = useContext(GeneralContext)

    const getProduct = async () => {
        try {
            const response = await api.get(`http://localhost:3000/produtos/${id}`);
            setProduto(response.data);
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
        }
    };

    useEffect(() => {
        getProduct()
    }, [id])

    const handleComprarClick = () => {
        if (produto) { 
            const isProdutoNoCarrinho = itens.some((item) => item.id === produto.id);
            if (!isProdutoNoCarrinho) {
                setItens((prevItens) => [...prevItens, produto]);
            }
            setOpen(true);
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