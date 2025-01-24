import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './componends/Counter'
import State from './componends/State'
import ApiGet from './componends/ApiGet'
import Product from './componends/Product'
import Navbar from './componends/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      {/* <Counter/>  
    <State/> 
     <ApiGet/> 
     <Product/> */}
    <Navbar/>
    <Routes>
      <Route path="/" element={<ApiGet/>}></Route>
      <Route path="/r" element={<Counter/>}></Route>
      <Route path="/c" element={<State/>}></Route>
      <Route path="/s" element={<Product/>}></Route>


    </Routes>

    </>
  )
}

export default App
