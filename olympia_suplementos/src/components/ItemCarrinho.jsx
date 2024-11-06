import React, { useContext, useEffect, useState } from 'react';
import { GeneralContext } from '../context/General';
import { api } from '../api/api';


const ItemCarrinho = ({ idProduto, quantidade }) => {
    const { produtos, setItens, open } = useContext(GeneralContext);
    const [produto, setProduto] = useState({})
    const [quant, setQuant] = useState(quantidade)
    const [precoLinha, setPrecoLinha] = useState(0)

    const getProduto = async () => {
        const response = await api.get(`/produtos/${idProduto}`)
        console.log(response.data)
        setProduto(response.data)
    }

    useEffect(() => {
        getProduto();
    }, [idProduto]);

    useEffect(() => {
        if (produto.preco) {
            setPrecoLinha(quant * produto.preco);
        }
    }, [produto, quant]);

    const handleRemoverDoCarrinho = (produtoId) => {
        setItens((prevItens) => prevItens.filter(item => item.idProduto !== produtoId));
    };

    const handleQuantidadeChange = (e) => {
        const novaQuantidade = e.target.value;

        if (novaQuantidade == 0) {
            handleRemoverDoCarrinho(idProduto)
            alert('O produto foi removido do seu carrinho.');
            return;
        }

        setQuant(novaQuantidade);
        setItens((itensAnteriores) =>
            itensAnteriores.map((ia) =>
                ia.id == idProduto ? { ...ia, quantidade: novaQuantidade } : ia
            )
        );
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span>{produto.nome}</span>

            <input
                type="number"
                value={quant}
                onChange={handleQuantidadeChange}
                style={{ width: '50px', textAlign: 'center', margin: '0 10px' }}
            />

            {/* Preço total justificado à direita */}
            <span style={{ fontWeight: 'bold' }}>R$ {(precoLinha).toFixed(2)}</span>
        </div>
    );
};

export default ItemCarrinho;