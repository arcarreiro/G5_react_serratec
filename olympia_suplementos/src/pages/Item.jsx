import { useState } from "react";
import Item from "../components/Item";

const Item = () => {
    const {setProduto}=useState('')

    const getProduct = async () => {
        try {
            const response = await api.get('http://localhost:3000/produtos/{id}');
            setProduto(response.data);
        } catch (error) {
            console.error("Erro ao buscar produto:", error);
        }
    };

    useEffect(() => {
        getProduct()
    },[])

    return (
        <>
        {/* Aqui será a página de exibição de um único produto, com detalhes */}
        Item
        </>
    )
}

export default Item