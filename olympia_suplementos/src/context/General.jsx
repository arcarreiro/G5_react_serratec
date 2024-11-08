import { createContext, useState } from "react";

const GeneralContext = createContext({})

const GeneralProvider = ({children}) => {
    // pedido
    const [itens, setItens] = useState([])
    const [valorTotal, setValorTotal] = useState(0)
    // produto
    const [produtos, setProdutos] = useState([])
    const [nomeProduto, setNomeProduto] = useState('')
    const [imgURL, setImgURL] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')
    const [estoque, setEstoque] = useState(0)
    // usuário
    const [user, setUser] = useState({})
    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [open, setOpen] = useState(false);
    return (
        <>
            <GeneralContext.Provider value={{
                itens, valorTotal, setValorTotal, setItens,
                produtos, setProdutos, nomeProduto, imgURL, descricao, preco, categoria, estoque,
                setNomeProduto, setImgURL, setDescricao, setPreco, setCategoria, setEstoque,
                username, senha, email, setUsername, setSenha, setEmail, open, setOpen, user, setUser
            }}>
                {children}
            </GeneralContext.Provider>
        </>
    )
}

export { GeneralContext, GeneralProvider }