import { createContext, useState } from "react";

const UserContext = createContext ({})

const [nome, setNome] = useState('')
const [senha, setSenha] = useState('')
const [email, setEmail] = useState('')
const UserProvider = ({ children }) => {
    return(
        <>
        <UserCoontext.Provider value={{nome, senha, email, setNome, setSenha, setEmail}}>
            { children }
        </UserCoontext.Provider>
        </>
    )
}

export { UserContext, UserProvider }