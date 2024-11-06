import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { GeneralContext } from "../context/General"
import { api } from "../api/api"
import ItemCarrinho from "./ItemCarrinho"

const LinhaPedido = (id, valTotal, itens) => {

    const encontrarProduto = async () => {
        const response = await api.get(`/produtos/${item.idProduto}`)
        const produto = response.data
        return produto
    }

    return (
        <>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <h2>Pedido #{id}</h2>
                </AccordionSummary>
                <AccordionDetails>
                {itens.map((item) => (
                        <ItemPedido
                        idProduto={item.idProduto}
                        quantidade={item.quantidade}
                        />
                    ))}
                    <br />
                    <span>Valor total do pedido: R$ {valTotal.toFixed(2)}</span>
                </AccordionDetails>
            </Accordion>


        </>
    )
}

export default LinhaPedido