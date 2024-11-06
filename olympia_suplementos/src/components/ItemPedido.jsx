import { useEffect, useState } from "react";
import { api } from "../api/api";

const ItemPedido = ({ idProduto, quantidade }) => {
    const [produto, setProduto] = useState({})

    const getProduto = async () => {
        const response = await api.get(`/produtos/${idProduto}`)
        setProduto(response.data)
    }

    useEffect(() => {
        getProduto();
    }, [idProduto]);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span>{produto.nome}</span>

            <span>x {quantidade}</span>

        </div>
    );
};

export default ItemPedido