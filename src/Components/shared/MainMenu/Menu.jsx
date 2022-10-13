import React from 'react'

import logoSrc from '../../../Assets/images/logo.png'
import menu from '../../../Assets/images/Index/menu.png'
import { Link } from 'react-router-dom'
import './Menu.scss'

export const Menu = ({active}) => {
  return (
    <>
        <img className="menu-icon" src={menu} alt='menu'/>

        <div className='menu-inicio d-flex justify-content-end align-items-center py-5 mb-6'>                                        
            <div className='mx-3 menu-item'>                    
                <Link to="/inicio">Inicio</Link>
                {
                    active == 'item-1' ? <div className="dot"> . </div> : null
                }
            </div>             
            <div className='mx-3 menu-item'>
                <Link to='/Sobrenosotros'>Sobre Nosotros </Link>
                {
                    active == 'item-2' ? <div className="dot"> . </div> : null
                }
            </div>         
                                                
            <div className='mx-3 menu-item'>
                <Link to='/Servicio'>Servicios </Link>
                {
                    active == 'item-3' ? <div className="dot"> . </div> : null
                }                
            </div>                
                                                        
            <div className='ms-3 me-5 menu-item'>
                <Link to='/Contactanos'>Contactanos</Link>      
                {
                    active == 'item-4' ? <div className="dot"> . </div> : null
                }    
            </div>
            <img className='logo-sobrenosotros mx-5' src={logoSrc} alt='logo' />
        </div>
    </>
  )
}
