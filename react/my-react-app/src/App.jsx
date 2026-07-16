import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Multiple from './Multiple'
import Formhandling from './Formhandling'
import Useeffect from './Useeffect'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactHome from './ReactHome'
import ReactAbout from './ReactAbout'
import Navbar from './Navbar'
import NewCounter from './NewCounter'
import Stylecss from './Stylecss'
import NewEvent from './NewEvent'
import ButtonMUI from './ButtonMUI'
import TextFieldMUI from './TextFieldMUI'
import BoxMUI from './BoxMUI'
import CardMUI from './CardMUI'
import TodoTask from './TodoTask'
import Counterref from './Counterref'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <TodoTask/>
    <Counterref/>
    {/* <ButtonMUI/>
    <TextFieldMUI/>
    <BoxMUI/>
    <CardMUI/> */}
    {/* <NewCounter/>
    <Login/>
    <NewEvent/>
    <Useeffect/> */}
    {/* <Multiple/>
    <Formhandling/>
    <Stylecss/>
    <ReactHome/>
    <ReactAbout/>
  <BrowserRouter>
  <Navbar/>
      <Routes>
        <Route path="/ReactHome" element={<ReactHome/>} />
        <Route path="/ReactAbout" element={<ReactAbout/>} />
      </Routes>
    </BrowserRouter> */}

    </>
  )
}
export default App;