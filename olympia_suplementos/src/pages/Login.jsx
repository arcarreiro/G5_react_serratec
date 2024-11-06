import React, { useContext, useState } from "react";
import '../css/login.css';
import {CiUser, CiLock} from 'react-icons/ci';
import { GeneralContext } from "../context/General";
import { api } from "../api/api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () =>{
    
    const {user, setUser} = useContext(GeneralContext)
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')

    const handleChangeMail = (e) => {
        setMail(e.target.value)
    }

    const handleChangePass = (e) => {
        setPass(e.target.value)
    }

    const handleLogin = async (e) =>{
        e.preventDefault()
        try {
            const response = await api.get('/users/', {
                params: {email:mail, senha:pass}
            })
            setUser(response.data)
            console.log(response.data)
        } catch {alert('Usuario e/ou senha incorretos.')}
    }
    
    return (<>
    <div class = "form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div className = "form-control">
                <input type="text" placeholder="Email" value={mail} onChange={handleChangeMail} />
                <CiUser className="icon user"/>
            </div>

            <div className="form-control">
                <input type="password" placeholder="Senha" value={pass} onChange={handleChangePass}/>
                <CiLock className="icon password"/>
            </div>
                <br />
            <button type="submit" value="Submit">Entrar</button>
            <br />
            <br />
            <p>
                Ainda não tem uma conta? <Link to = '/signup'><b>Cadastre-se!</b></Link>
            </p>
        </form>
        </div>
        </>);
}
export default Login