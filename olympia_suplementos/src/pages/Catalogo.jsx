import { useEffect, useState } from "react";
import Produto from "../components/Produto";
import { api } from '../api/api'

const Catalogo = () => {
    const [produtos, setProdutos] = useState([])

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
                            categoria={produto.categoria}
                            estoque={produto.estoque}
                        />
                ))}
            </div>

        </>
    )

}

export default Catalogo