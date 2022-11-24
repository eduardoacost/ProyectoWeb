import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'
import close from '../../Assets/images/Index/menu/close.png'
import secciones from '../../Assets/images/Index/menu/secciones.png'
import logo from '../../Assets/images/logo.png'

export const Menu = ({onToggleMenu}) => {
    const [showMenu, setShowMenu] = useState(true);

    const handleHideMenu = () => {
        setShowMenu(false);
        setTimeout(() => {
            onToggleMenu(false);
        }, 1000);
    }

  return (
    <div className={`side-menu animate__animated ${ showMenu ? 'animate__slideInLeft' : 'animate__slideOutLeft' }`}>
        <img className='close' src={close} alt='close' onClick={() => handleHideMenu()} />

        
        <div className="row my-4">
            <div className="col text-center">
                <img className='logo mx-auto' src={logo} alt='logo' />
            </div>
        </div>

        <div className="row my-4">
            <div className="col">
                <Link to="Login">
                    <button className='btn btn-menu'> Ingreso </button>
                </Link>
            </div>
            <div className="col">
                <Link to="Login">
                    <button className='btn btn-menu'> Registro </button>
                </Link>
            </div>
        </div>
        

        
        <img className='secciones' src={secciones} alt='secciones' />

        <div>
            <nav>
                <ul className='menu'>
                    <li className='mb-3'> 
                        <Link to="inicio">Inicio</Link>
                    </li>
                    <li className='mb-3'> 
                        <Link to='Sobrenosotros'>Sobre Nosotros </Link>
                    </li>
                    <li className='mb-3'> 
                        <Link to='Servicio'>Servicios </Link>
                    </li>
                    <li className='mb-3'> 
                        <Link to='Contactanos'>Contactenos</Link> 
                    </li>
                    <li className='mb-3'> 
                        <Link to='Carrito'>Carrito</Link> 
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
