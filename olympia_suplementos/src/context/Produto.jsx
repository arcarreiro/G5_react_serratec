/* import { createContext, useState } from "react";

const ProdutoContext = createContext ({})

const [nome, setNome] = useState('')
const [imgURL, setImgURL] = useState('')
const [descricao, setDescricao] = useState('')
const [preco, setPreco] = useState('')
const [categoria, setCategoria] = useState('')
const [estoque, setEstoque] = useState()

const ProdutoProvider = ({ children }) => {
    return(
        <>
        <ProdutoContext.Provider value={{nome, imgURL, descricao, preco, categoria, estoque,
            setNome, setImgURL, setDescricao, setPreco, setCategoria, setEstoque}}>
            { children }
        </ProdutoContext.Provider>
        </>
    )
}
export { ProdutoContext, ProdutoProvider } */