import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Produto from "../components/Produto";
import { GeneralContext } from "../context/General";
import { api } from "../api/api";

const Catalogo = () => {
    const { produtos, setProdutos, itens, setItens, setOpen } = useContext(GeneralContext)
    const { categoria } = useParams();

    const getAllProducts = async () => {
        try {
            const response = await api.get('/produtos');
            setProdutos(response.data);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    };

    useEffect(() => {
        getAllProducts()
    }, [])

    const handleAdicionarCarrinhoClick = (produtoId) => {
        let itemAdicionar = { idProduto:produtoId, quantidade: 1 }
        if (produtoId) {
            const isProdutoNoCarrinho = itens.some((item) => item.idProduto === produtoId);
            if (!isProdutoNoCarrinho) {
                setItens((prevItens) => [...prevItens, itemAdicionar]);
            } else {
                alert('Produto já está no carrinho!');
            }
        }
    };

    const handleComprarClick = (produtoId) => {
        let itemAdicionar = { idProduto:produtoId, quantidade: 1 }
        if (produtoId) {
            const isProdutoNoCarrinho = itens.some((item) => item.idProduto === produtoId);
            if (!isProdutoNoCarrinho) {
                setItens((prevItens) => [...prevItens, itemAdicionar]);
                setOpen(true);
            } else {
                setOpen(true);
            }
        }
    };

    const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);

    return (
        <>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                padding: '10px',
                gap: '50px',
                justifyContent: 'center'

            }}>

                {produtosFiltrados.map((produto) => (
                    <Produto
                        key={produto.id}
                        id={produto.id}
                        imgurl={produto.imgurl}
                        nome={produto.nome}
                        descricao={produto.descricao}
                        preco={produto.preco}
                        onAdicionarCarrinhoClick={handleAdicionarCarrinhoClick}
                        onComprarClick={handleComprarClick}
                    />
                ))}
            </div>

        </>
    )

}

export default Catalogo