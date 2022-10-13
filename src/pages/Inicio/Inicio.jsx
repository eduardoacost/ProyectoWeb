import './Inicio.scss'
import helado from'../../Assets/Inicio/helao 1.png'
import malteada from'../../Assets/Inicio/malteada 1.png'
import { Menu } from '../../Components/shared/MainMenu/Menu'

export const Inicio =() =>{
    return(
        <div className='content-inicio'>
                <Menu active='item-1' />
                <div className="row ms-5 pt-5">
                    <div className="col-5 px-5">
                        <div className='texto1'>
                            Ordena en tus heladerias favoritas
                        </div>
                        <div className='texto2 mt-4'>
                            Pide tus postres favoritos en cualquier momento y te las enviaremos justo donde estés.
                        </div> 
                        <button type="button" className="btn btn-inicio mt-4">Inicia ahora</button>
                    </div>
                    <div className="col-7 d-flex align-items-end justify-content-end">
                        <img className='helado' src={helado} alt='helado' />   
                        <img className='malteada' src={malteada} alt='malteada' />   
                    </div>
                </div>
                                                     
        </div>
        
        )
}