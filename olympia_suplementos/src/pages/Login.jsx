import React from "react";
import '../css/login.css';
import {CiUser, CiLock} from 'react-icons/ci';

const Login = () =>{
    return (<>
    <div class = "form-container">
        <h2>Login</h2>
        <form>
            <div className = "form-control">
                <input type="text" placeholder="Email" />
                <CiUser className="icon user"/>
            </div>

            <div className="form-control">
                <input type="password" placeholder="Senha" />
                <CiLock className="icon password"/>
            </div>
                <br />
            <button>Entrar</button>
            <br />
            <br />
            <p>
                Ainda não tem uma conta? <b>Cadastre-se!</b>
            </p>
        </form>
        </div>
        </>);
}
export default Login