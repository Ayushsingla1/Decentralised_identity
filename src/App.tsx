import './App.css'
import { Route , Routes } from 'react-router-dom'
import Homepage from './pages/homePage'
import Requests from './pages/requests'
import Home from './pages/home'
import NotFound from './pages/notFound'
import ApplyDocs from './pages/applyDocs'
import UserDocs from './pages/userDocs'
import ApplyForm from './pages/applyForm'
function App() {

  return (

    <Routes>
      <Route path='/' element = {<Homepage/>}>
        <Route index element = {<Home/>}/>
        <Route path = '/request' element = {<Requests/>}/>
        <Route path = '/apply' element = {<ApplyDocs/>}/>
        <Route path = '/documents' element = {<UserDocs/>}/>
        <Route path = '/form' element = {<ApplyForm/>}/>
        <Route path = '*' element = {<NotFound/>}/>
      </Route>
    </Routes>
  )
}

export default App
