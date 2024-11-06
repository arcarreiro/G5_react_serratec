import { useContext, useEffect, useState } from "react"
import { api } from "../api/api"
import { GeneralContext } from "../context/General"
import LinhaPedido from "../components/LinhaPedido"

const Pedidos = () => {
    const { user } = useContext(GeneralContext)
    const [pedidos, setPedidos] = useState([])

    const buscarPedidos = async () => {
        const response = await api.get('/pedidos')
        let arrayPedidos = response.data
        
        let pedidosUsuario = arrayPedidos.filter(pedido => pedido.idUser === user.id)
        console.log(pedidosUsuario)
        // setPedidos({...pedidosUsuario})
    }

    useEffect(() => {
        buscarPedidos()
    }, [])

    return (
        <>
            <div>
                {}
                {pedidos.map((pedido) => {
                    <LinhaPedido
                        id={pedido.id}
                        valTotal={pedido.valorTotal}
                        itens={pedido.itens}
                    />
                })}
            </div>
        </>
    )
}

export default Pedidos