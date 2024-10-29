import './App.css'
import { Route , Routes } from 'react-router-dom'
import Homepage from './pages/homePage'
import Requests from './pages/requests'
import Home from './pages/home'
import NotFound from './pages/notFound'
function App() {

  return (

    <Routes>
      <Route path='/' element = {<Homepage/>}>
        <Route index element = {<Home/>}/>
        <Route path = '/request' element = {<Requests/>}/>
        <Route path = '*' element = {<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
