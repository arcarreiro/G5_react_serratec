import { Box, Button, Modal } from '@mui/material';
import { useContext, useState } from 'react';
import { PiShoppingCartBold } from 'react-icons/pi';
import { GeneralContext } from '../context/General';
import ItemCarrinho from './ItemCarrinho';



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

    const { open, setOpen, itens, setItens, produtos } = useContext(GeneralContext)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const valorTotalPedido = itens.reduce((total, item) => {
        const produto = produtos.find((prod) => prod.idProduto === item.idProduto);
        return produto ? total + produto.preco * item.quantidade : total;
    }, 0);

    return <>
        <div className="cart" style={{ cursor: 'pointer' }}>
            <PiShoppingCartBold onClick={handleOpen} size={30} />
        </div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
                <h3 style={{ marginBottom: "0.5rem" }}>Valor Total: R$ {valorTotalPedido.toFixed(2)}</h3>
                <button>Concluir pedido</button>
            </Box>
        </Modal>
    </>

}

export default Carrinho