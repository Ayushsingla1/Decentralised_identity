import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import {Toaster} from 'react-hot-toast'
import WalletConnector from './components/walletConnector.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <WalletConnector>
    <Toaster/>
    <App />
  </WalletConnector>
  </BrowserRouter>
)

