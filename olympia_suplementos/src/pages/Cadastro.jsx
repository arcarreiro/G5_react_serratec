import React, { useContext } from "react";
import '../css/login.css';
import {CiUser, CiLock, CiAt} from 'react-icons/ci';
import { GeneralContext } from "../context/General";

const Cadastro = () =>{

const{username, setUsername, senha, setSenha, email, setEmail} = useContext(GeneralContext)

const handleUserChange = (e) =>{
    setUsername(e.target.value)    
}

const handleEmailChange = (e) =>{
    setEmail(e.target.value)
}

const handlePassChange = (e) =>{
    setSenha(e.target.value)
}

const handleFormSubmit = (e) => {
    e.preventDefault()
    setUsername(username)
    setEmail(email)
    setSenha(senha)
}



   return (<>
    <div class = "form-container">
        <h2>Faça Seu Cadastro</h2>
        <form>
            <div className = "form-control">
                <input type="username" placeholder="Username" id="username" onChange={[username, handleUserChange]}/>
                <CiUser className="icon user"/>
            </div>

            <div className="form-control">
                <input type="email" placeholder="Email" id="email" onChange={email} />
                <CiAt className="icon email"/>
            </div>

            <div className="form-control">
                <input type="password" placeholder="Senha" id="senha" onChange={senha} />
                <CiLock className="icon password"/>
            </div>

                <br />
            <button type="submit" value="Submit" onSubmit={handleFormSubmit}>Cadastrar</button>
            <br />
            <br />
            <p>
                Já possui uma conta? <b>Faça Login!</b>
            </p>
        </form>
        </div>
        </>);
}

export default Cadastro