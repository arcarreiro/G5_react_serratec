import React, { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../context/General';
import { api } from '../api/api';


const ItemCarrinho = ({ idProduto, quantidade }) => {
    const { produtos, setItens, open } = useContext(GeneralContext);
    const [produto, setProduto] = useState({})

    // produto.id === item.id
    // const produto = produtos.find((prod) => prod.id === item.id);

    // const precoTotal = produto.preco * quantidade;

    const getProduto = async () => {
        const response = await api.get(`/produtos/${idProduto}`)
        console.log(response.data)
        setProduto(response.data)
    }

    useEffect(() => {
        console.log('texto')
        getProduto()
    }, [idProduto])

    const handleQuantidadeChange = (e) => {
        const novaQuantidade = Number(e.target.value);

        setItens((itensAnteriores) =>
            itensAnteriores.map((ia) =>
                ia.id === idProduto ? { ...ia, quantidade: novaQuantidade } : ia
            )
        );
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span>{produto.nome}</span>

            <input
                type="number"
                value={quantidade}
                onChange={handleQuantidadeChange}
                style={{ width: '50px', textAlign: 'center', margin: '0 10px' }}
            />

            {/* Preço total justificado à direita */}
            <span style={{ fontWeight: 'bold' }}>R$ {(produto.preco * quantidade).toFixed(2)}</span>
        </div>
    );
};

export default ItemCarrinho;