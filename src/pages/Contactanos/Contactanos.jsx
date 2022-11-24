import io from 'socket.io-client';
import { useEffect } from 'react'
import './Contactanos.scss'

export const Contactenos =()=>{

    useEffect(() => {
        const socket= io('http://localhost:4000');
        socket.on('connect',()=>{
            console.log('Connected',socket.id);

        })
        const payload={
            mensaje: "Hello World",
            uid:123,
            fecha:'nov 22,2022'
        }
        socket.emit('mensaje-de-cliente',
            payload,
            (data)=>{
                console.log('Respuesta a tu mensaje',data);
        });
        socket.on('mensaje-de-server',(payload)=>{
            console.log(payload);
        })
        socket.on('disconnect',()=>{
            console.log('Disconnected');
        })
    
        const txtUid = document.querySelector("#txtUid");
        const txtMensaje=document.querySelector("#txtMensaje");
        const ListaUsuario=document.querySelector("#lista-usuarios");
        const chats=document.querySelector("#chats-body");
        const privado=document.querySelector("#privado");

        socket.on("usuarios activos",(payload)=>{
            let usersHtml = ''
            payload.forEach(element => {
                if(socket.id === element)
                    return;
                usersHtml +=`<li> ${element} </li>`
                
            });
            ListaUsuario.innerHTML = usersHtml
        });
        txtMensaje.addEventListener('keyup',({keyCode})=>{
            const uId = txtUid.value
            const mensaje = txtMensaje.value
            const payload ={
                from: socket.id,
                to:uId,
                mensaje

            }
            if(keyCode !=13){return;}
            if(mensaje.length == 0){return;}
            socket.emit('enviar-mensaje',payload);
        });
        socket.on('recibir-mensaje',(payload)=>{
            console.log(payload);
            const className = payload.from == socket.id ? 'text-end':'text-start text-primary'
            if(!payload.to){
                chats.innerHTML +=`<li class="${className}"><small>${payload.mensaje}</small></li>`

            }else{
                privado.innerHTML +=`<li class="${className}"><small>${payload.mensaje}</small></li>`
            }
        });
        
    }, [])

    return(
        <>
        <div className='Contactanos'>
            <div className='m-4'>
                <h1>Atencion Al Cliente</h1>
                <hr/>
                <div className='row'>
                    <div className='col-6'>
                        <h3>Enviar Mensaje</h3>
                        <hr/>
                        <input type="text"
                            id="txtUid"
                            className="form-control mb-2"
                            placeholder="uid"
                            autoComplete="false">
                        </input>
                        <input type="text"
                            id="txtMensaje"
                            className="form-control mb-2"
                            placeholder="Mensaje"
                            autoComplete="false">
                        </input>
                        <h3>Usuarios</h3>
                        <hr/>
                        <ul id="lista-usuarios"></ul>
                    </div>
                    <div className="col-6">
                        <h3>Chats</h3>
                            <div className="card">
                                <div id="chats-body" className="card-body">

                                </div>
                            </div>
                        <h3>Privados</h3>
                        <div className="card">
                         <div id="privado" className="card-body">

                    </div>
                </div>

            </div>
                </div>

            </div>
        </div>
            
        </>
    )
}