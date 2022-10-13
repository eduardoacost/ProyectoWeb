import './Index.scss';
import logoSrc from '../../Assets/images/logo.png'
import menu from '../../Assets/images/Index/menu.png'
import scroll from '../../Assets/images/Index/scroll.png'
import marker from '../../Assets/images/Index/marker.png'
import { Menu } from '../../Components/index/Menu';
import { useState } from 'react';

export const Home =() =>{
    const [showMenu, setShowMenu] = useState(false);
    
    const onToggleMenu = ( state ) => {
        setShowMenu(state)
    }
    
    return (
        <div className='content-index'>
            
            <img className="menu-icon" src={menu} alt='menu' onClick={() => setShowMenu( !showMenu )} />
            {
                showMenu ? 
                    <>
                        <div className="blur"></div>
                        <Menu onToggleMenu={onToggleMenu} /> 
                    </> : ''
            }
            <div className='container text-center'>
                <div className="row pt-5">
                    <div className="col">
                        <img src={logoSrc} alt='logo' />
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col d-flex justify-content-center">
                        <img src={marker} alt='marker' className='me-2' />
                        <input type="text" className="search" placeholder="¿Que deseas buscar?" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={scroll} alt='scroll' />   
                    </div>
                </div>
                <div className="row my-6">
                    <div className="col">
                        <button type="button" className="btn btn-primary">¡Pide ahora!</button>
                    </div>
                </div>
            
            </div>
        </div>
    )
}