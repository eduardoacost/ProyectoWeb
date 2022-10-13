import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/index/Index'
import { Contactenos } from '../../pages/Contactanos/Contactanos'
import { Inicio } from '../../pages/Inicio/Inicio'
import { Servicios } from '../../pages/Servicios/Servicios'
import { Sobrenosotros } from '../../pages/Sobrenosotros/Sobrenosotros'
import { Login } from '../../pages/Login/Login'

export const NavComponent = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/Servicio' element={<Servicios/>}/>
        <Route path='/Sobrenosotros' element={<Sobrenosotros/>}/>
        <Route path='/Contactanos' element={<Contactenos/>}/>
        <Route path='/Login' element={<Login/>}/>
    </Routes>
  )
}
