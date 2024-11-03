import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro'
import { Produtos } from './pages/Produtos'
import { Item } from './pages/Item'
import { Pedidos } from './pages/Pedidos'
import { Header } from './components/Header'

function App() {

  return (
    <>
    <Header />
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Cadastro}/>
      <Route exact path='/produtos' component={Produtos}/>
      <Route exact path='/item' component={Item}/>
      <Route exact path='/pedidos' component={Pedidos}/>
    </Switch>
    </BrowserRouter>

    </>
  )
}

export default App
