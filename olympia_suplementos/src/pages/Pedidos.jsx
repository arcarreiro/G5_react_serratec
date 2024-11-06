import { useContext, useEffect, useState } from "react"
import { api } from "../api/api"
import { GeneralContext } from "../context/General"
import LinhaPedido from "../components/LinhaPedido"

const Pedidos = () => {
    const { user } = useContext(GeneralContext)
    const [pedidos, setPedidos] = useState([])
    const [loading, setLoading] = useState(true);

    const buscarPedidos = async () => {
        console.log(user.id)
        try {
            const response = await api.get('/pedidos');
            const arrayPedidos = response.data;
            console.log(arrayPedidos);
            const pedidosUsuario = arrayPedidos.filter(pedido => pedido.idUser === user.id);
            console.log(pedidosUsuario);
            setPedidos(pedidosUsuario);
        } catch (error) {
            console.error("Erro ao buscar os pedidos:", error);
        }
    }

    useEffect(() => {
        if (user.id) {
            buscarPedidos();
        }
    }, [user.id]);

    if (loading) {
        return <div>Carregando pedidos...</div>;  // Exibe uma mensagem de carregamento
    }

    return (
        <>
            <div>
                { }
                {pedidos.map((pedido) => (
                    <LinhaPedido
                        key={pedido.id}
                        id={pedido.id}
                        valTotal={pedido.valorTotal}
                        itens={pedido.itens}
                    />
                )
                )}
            </div>
        </>
    )
}

export default Pedidos