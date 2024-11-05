import React from "react";
import '../css/login.css';
import {CiUser, CiLock, CiAt} from 'react-icons/ci';

const Cadastro = () =>{
    return (<>
    <div class = "form-container">
        <h2>Faça Seu Cadastro</h2>
        <form>
            <div className = "form-control">
                <input type="text" placeholder="Username" />
                <CiUser className="icon user"/>
            </div>

            <div className="form-control">
                <input type="email" placeholder="Email" />
                <CiAt className="icon email"/>
            </div>

            <div className="form-control">
                <input type="password" placeholder="Senha" />
                <CiLock className="icon password"/>
            </div>

                <br />
            <button>Cadastrar</button>
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