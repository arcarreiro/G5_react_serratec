import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PedidoProvider } from './context/Pedido.jsx'
import { UserProvider } from './context/User.jsx'
import { ProdutoContext } from './context/Produto.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ProdutoContext>
        <PedidoProvider>
          <App />
        </PedidoProvider>
      </ProdutoContext>
    </UserProvider>
  </StrictMode >,
)
