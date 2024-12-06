import './App.css'
import AddSchool from './frontend/addSchool.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  ShowSchools from "./frontend/showSchools.jsx"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddSchool/>}></Route>
      <Route path='/ShowSchool' element={ <ShowSchools/>}></Route>

    </Routes>
    
   
    </BrowserRouter>
  )
}

export default App
