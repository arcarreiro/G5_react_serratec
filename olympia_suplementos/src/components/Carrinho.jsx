import { Box, Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { PiShoppingCartBold } from 'react-icons/pi';



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

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <>
    <div className="cart" style={{cursor: 'pointer'}}>
                            <PiShoppingCartBold onClick={handleOpen} size={30}/>
                        </div>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
                <h2 id="parent-modal-title">Text in a modal</h2>
                <p id="parent-modal-description">
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </p>
            </Box>
        </Modal>
    </>

}

export default Carrinho