import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { GeneralContext } from "../context/General"
import { api } from "../api/api"
import ItemCarrinho from "./ItemCarrinho"
import ItemPedido from "./ItemPedido"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../css/pedido.css'

const LinhaPedido = ({ id, valTotal, itens }) => {

    const encontrarProduto = async () => {
        const response = await api.get(`/produtos/${item.idProduto}`)
        const produto = response.data
        return produto
    }

    return (
        <>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <h2>Pedido #{id}</h2>
                </AccordionSummary>
                <AccordionDetails className='accordion-details'>
                    {itens.map((item) => (
                        <ItemPedido
                            key={item.idProduto}
                            idProduto={item.idProduto}
                            quantidade={item.quantidade}
                        />
                    ))}
                    <br />
                    <h3>Valor total do pedido: R$ {valTotal.toFixed(2)}</h3>
                </AccordionDetails>
            </Accordion>


        </>
    )
}

export default LinhaPedido