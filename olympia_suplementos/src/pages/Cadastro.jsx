import React, { useContext } from "react";
import '../css/login.css';
import {CiUser, CiLock, CiAt} from 'react-icons/ci';
import { GeneralContext } from "../context/General";
import { api } from "../api/api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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

const handleFormSubmit = async (e) => {
    e.preventDefault()
    const user = {
        nome:username, email:email, senha:senha
    }
    const response = await api.post("/users", user)
}
   return (<>
    <div class = "form-container">
        <h2>Faça Seu Cadastro</h2>
        <form onSubmit={handleFormSubmit}>
            <div className = "form-control">
                <input type="username" placeholder="Username" id="username" value={username} onChange={handleUserChange}/>
                <CiUser className="icon user"/>
            </div>

            <div className="form-control">
                <input type="email" placeholder="Email" id="email" value={email} onChange={handleEmailChange} />
                <CiAt className="icon email"/>
            </div>

            <div className="form-control">
                <input type="password" placeholder="Senha" id="senha" value={senha} onChange={handlePassChange} />
                <CiLock className="icon password"/>
            </div>

                <br />
            <button type="submit" value="Submit">Cadastrar</button>
            <br />
            <br />
            <p>
                Já possui uma conta? <Link to = '/login'><b>Faça Login!</b></Link>
            </p>
        </form>
        </div>
        </>);
}

export default Cadastro