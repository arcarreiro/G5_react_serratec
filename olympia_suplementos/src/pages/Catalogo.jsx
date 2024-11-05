import { useContext, useEffect, useState } from "react";
import Produto from "../components/Produto";
import { api } from '../api/api.js'
import { GeneralContext } from "../context/General";

const Catalogo = () => {
    const {produtos, setProdutos} = useContext(GeneralContext)

    const getAllProducts = async () => {
        try {
            const response = await api.get('http://localhost:3000/produtos');
            setProdutos(response.data);
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    };

    useEffect(() => {
        getAllProducts()
    },[])

    return (
        <>
            
            <div style={{ 
                display: 'flex',
                flexWrap: 'wrap',
                padding: '10px',
                gap: '50px',
                justifyContent: 'center'

            }}>

                 {produtos.map((produto) => (
                        <Produto
                            key={produto.id}
                            imgurl={produto.url}
                            nome={produto.nome}
                            descricao={produto.descricao}
                            preco={produto.preco}
                        />
                ))}
            </div>

        </>
    )

}

export default Catalogo