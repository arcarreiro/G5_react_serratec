import { Box, Button, Modal } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { PiShoppingCartBold } from 'react-icons/pi';
import { GeneralContext } from '../context/General';
import ItemCarrinho from './ItemCarrinho';
import { api } from '../api/api';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const Carrinho = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const { open, setOpen, itens, setItens, produtos, valorTotal, setValorTotal, user } = useContext(GeneralContext)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const history = useHistory()

    const handleValorTotal = async () => {
        let total = 0;

        for (const item of itens) {
            const response = await api.get(`/produtos/${item.idProduto}`);
            const produto = response.data;
            const valMultiplicado = produto.preco * item.quantidade;
            total += valMultiplicado;
        }

        setValorTotal(total)
    };

    useEffect(() => {
        handleValorTotal();
    }, [itens])


    const atualizarEstoque = async () => {
        for (const item of itens) {
            const response = await api.get(`/produtos/${item.idProduto}`);
            const produto = response.data;

            const novoEstoque = produto.estoque - item.quantidade;

            await api.patch(`/produtos/${item.idProduto}`, { estoque: novoEstoque });
        }
    };

    const handleConcluirPedido = async () => {
        const estoqueSuficiente = await verificarEstoque()

        if (!estoqueSuficiente) {
            alert("Não foi possível concluir o pedido pois o estoque é insuficiente.")
            return
        }
        if (user && user.id) {
            const pedido = {
                idUser: user.id,
                valorTotal: valorTotal,
                itens: itens
            }
            try {
                const response = await api.post('/pedidos', pedido)
                alert("Pedido concluído com sucesso!")
                history.push('/')
                setOpen(false)
                atualizarEstoque()
                setItens([])
            } catch {
                alert("Não foi possível acessar a API.")
            }
        } else {
            alert("Antes de concluir o pedido, faça login!")
            setOpen(false)
            history.push('/login')
        }

    }

    const verificarEstoque = async () => {
        for (const item of itens) {
            const response = await api.get(`/produtos/${item.idProduto}`)
            const prod = response.data
            if (item.quantidade > prod.estoque) {
                alert("Quantidade insuficiente em estoque! \nRestam apenas " + prod.estoque + " unidades do produto " + prod.nome)
                return false
            } else {
                return true
            }
        }
    }

    const handleEsvaziarCarrinhoClick = () => {
        setItens([])
    }

    return <>
        <div className="cart" style={{ cursor: 'pointer' }}>
            <PiShoppingCartBold onClick={handleOpen} size={30} />
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: '50vw' }}>
                <h2 id="parent-modal-title" style={{ textAlign: 'center', color: 'black' }}><PiShoppingCartBold size={30} />  Seu Carrinho</h2>
                <div id="parent-modal-description" style={{ backgroundColor: 'whitesmoke' }}>
                    {itens.map((item, index) => (
                        <ItemCarrinho
                            key={index}
                            idProduto={item.idProduto}
                            quantidade={item.quantidade}
                        />
                    ))}
                </div>
                {console.log(itens[0])}
                <h3 style={{ marginBottom: "0.5rem", textAlign: 'right' }}>Valor Total: R$ {valorTotal.toFixed(2)}</h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <button onClick={handleConcluirPedido}>Concluir pedido</button>
                    <button onClick={handleEsvaziarCarrinhoClick}>Esvaziar o carrinho</button>
                </div>
            </Box>
        </Modal>
    </>

}

export default Carrinho