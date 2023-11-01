import "./app.css"

import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import { Auth } from "./Pages/Auth"

function App() {
  

  return (
    <>
     
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Auth/>}></Route>
    </Routes>
     
    </>
  )
}

export default App
