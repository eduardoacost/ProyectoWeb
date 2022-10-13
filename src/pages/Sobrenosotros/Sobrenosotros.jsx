import './Sobrenosotros.scss';
import delivery from '../../Assets/SobreNosotros/delivery 1.png'
import imagen from '../../Assets/SobreNosotros/Img.png'
import { Menu } from '../../Components/shared/MainMenu/Menu';

export const Sobrenosotros =() =>{
    return(
        <>
            <div className='content-Sobrenosotros'>
                <Menu active='item-2' />
                
                    <div className="row">
                        <div className="col">
                            <img className='delivery' src={delivery} alt='delivery' />  

                        </div>
                    </div>
                    <div className='texto3'>
                        ¡Llegamos a tu sector! La Voragine
                    </div>
                    <div className='texto4'>
                        FoodForU es una empresa que va enfocada a entregar pedidos en lo alto de pance. 
                        La voragine es el primer sector asignado a nuestras entregas.
                    </div>
                    <div className="row">
                        <div className="col">
                            <img className='imagen' src={imagen} alt='imagen' />  
                                
                        </div>

                    </div>
                    <div className='texto5'>
                        ¡Recibe tus postres en poco tiempo!
                    </div>
                    <div className='texto6'>
                        Nuestro catalogo de reposterias y 
                        heladerias estaran cerca de tu zona para que disfrutes a tiempo de tu pedido.
                    </div>
                    
            </div>
        </>
    )
}