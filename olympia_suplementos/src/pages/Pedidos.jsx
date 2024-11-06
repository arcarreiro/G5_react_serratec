import { useContext, useEffect, useState } from "react"
import { api } from "../api/api"
import { GeneralContext } from "../context/General"
import LinhaPedido from "../components/LinhaPedido"
import "../css/pedido.css"
import { BsEmojiTear } from "react-icons/bs"

const Pedidos = () => {
    const { user } = useContext(GeneralContext)
    const [pedidos, setPedidos] = useState([])
    const [loading, setLoading] = useState(true);

    const buscarPedidos = async () => {
        try {
            const response = await api.get('/pedidos', {
                params: {
                    idUser: user.id
                }
            });
            setPedidos(response.data);
            setLoading(false)
        } catch (error) {
            console.error("Erro ao buscar os pedidos:", error);
        }
    }

    useEffect(() => {
        buscarPedidos();
    }, []);

    if (loading) {
        return <div>Carregando pedidos...</div>;
    }

    return (
        <>
            <div className='accordion'>
                {pedidos.length > 0 ?
                (pedidos.map((pedido) => (
                    <LinhaPedido
                    key={pedido.id}
                    id={pedido.id}
                    valTotal={pedido.valorTotal}
                    itens={pedido.itens}
                    />
                ))
            ) : <h1 style={{color: '#333333'}}>Você ainda não fez nenhum pedido... <BsEmojiTear /></h1>}
            </div>
        </>
    )
}

export default Pedidos