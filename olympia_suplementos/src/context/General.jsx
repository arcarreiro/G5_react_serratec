import { createContext, useState } from "react";

const GeneralContext = createContext ({})

const GeneralProvider = ({ children }) => {
const [item, setItem] = useState('')
const [quantidade, setQuantidade]= useState(0)
const [valorTotal, setValorTotal]= useState(0)
const [nomeProduto, setNomeProduto] = useState('')
const [imgURL, setImgURL] = useState('')
const [descricao, setDescricao] = useState('')
const [preco, setPreco] = useState('')
const [categoria, setCategoria] = useState('')
const [estoque, setEstoque] = useState(0)
const [username, setUsername] = useState('')
const [senha, setSenha] = useState('')
const [email, setEmail] = useState('')
const [open, setOpen] = useState(false);

    return(
        <>
        <GeneralContext.Provider value={{ item, quantidade, valorTotal, setValorTotal, setItem, setQuantidade,
            nomeProduto, imgURL, descricao, preco, categoria, estoque,
            setNomeProduto, setImgURL, setDescricao, setPreco, setCategoria, setEstoque,
            username, senha, email, setUsername, setSenha, setEmail, open, setOpen
        }}>
            { children }
        </GeneralContext.Provider>
        </>
    )
}

export { GeneralContext, GeneralProvider }