import './Servicios.scss'
import celphone from '../../Assets/Servicios/Img.png'
import service1 from '../../Assets/Servicios/Service 1.png'
import service2 from '../../Assets/Servicios/Service 2.png'
import service3 from '../../Assets/Servicios/Service 3.png'
import icono from '../../Assets/Servicios/Icon.png'
import playstore from '../../Assets/Servicios/Vector.png'
import { Menu } from '../../Components/shared/MainMenu/Menu'

export const Servicios =()=>{
    return(
        <>
            <div className='content-servicios'>

                <Menu active='item-3' />   

                <div className="row mx-5 mt-12 mb-5">
                    <div className="col col-sm-4">
                        <img className='Service' src={service1} alt='Service 1' />  
                    </div>
                    <div className="col col-sm-4">
                        <img className='Service' src={service2} alt='Service 2' />  
                    </div>
                    <div className="col col-sm-4">
                        <img className='Service' src={service3} alt='Service 3' />                                   
                    </div>
                </div>
                <div className="row mx-5 mt-2">

                    <div className="col">
                        <img className='icono' src={celphone} alt='icono' />                              
                    </div>

                    <div className="col">
                        <div className='texto7'>
                            Poco a poco... ¡Pronto estaremos en tus aplicativos moviles!
                        </div>
                        <div className="row">
                            <div className="col-6 px-2">
                                <button type="button" className="btn btn-Servicio">
                                    <img className='icono' src={icono} alt='icono' /> App Store
                                </button>
                            </div>
                            <div className="col-6 px-2">
                                <button type="button" className="btn btn-Servicio">
                                    <img className='iconop' src={playstore} alt='icon' />  Play Store
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}