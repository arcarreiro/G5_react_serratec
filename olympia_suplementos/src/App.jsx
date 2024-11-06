import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Catalogo from "./pages/Catalogo";
import Item from "./pages/Item";
import Pedidos from "./pages/Pedidos";
import Header from "./components/Header";
import { api } from './api/api'
import { GeneralContext } from './context/General'



function App() {
 const { setProdutos } = useContext(GeneralContext)
  const getAllProducts = async () => {
    try {
      const response = await api.get('http://localhost:3000/produtos');
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <div style={{ paddingTop: '10.5rem' }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Cadastro} />
            <Route exact path='/catalogo/:categoria' component={Catalogo} />
            <Route exact path='/item/:id' component={Item} />
            <Route exact path='/pedidos/:idUser' component={Pedidos} />
          </Switch>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
