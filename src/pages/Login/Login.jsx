import './Login.scss';
import logoSrc from '../../Assets/images/logo.png'
import frame1 from '../../Assets/Login/Frame (2).png'
import frame2 from '../../Assets/Login/Frame (1).png'
import frame3 from '../../Assets/Login/Frame.png'
import { Link } from 'react-router-dom'
import { signInWithPopup,FacebookAuthProvider } from "firebase/auth";
import { auth } from '../../Firebase/Config';
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';
import { async } from '@firebase/util';
import axios from 'axios';


export const Login=()=>{
    const[datos,setDatos]=useState({
        email:"",
        password:""

    });
    const handleInputChange =(e) =>{
        let{name,value} = e.target;
        let newDatos = {...datos,[name]:value};
        setDatos(newDatos);
    }
    const handleSubmit = ()=>{
        const {email,password}=datos
       
        if(email && password){
            const res = axios.post("http://localhost:4000/new",datos)
            console.log(res.data)
            alert("Bienvenido"+res)
        }else{
            
            
            alert("ingreso invalido" )
        }
    }

    const signinwithfacebook=()=>{
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth,provider).then((re)=>{
            console.log(re);
        }).catch((err)=>{
            console.log(err.message);
        })

    }
    const signinwithgoogle=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then((result) => {
            
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            
            const user = result.user;
            
          }).catch((error) => {
            
            const errorCode = error.code;
            const errorMessage = error.message;
            
            const email = error.customData.email;
            
            const credential = GoogleAuthProvider.credentialFromError(error);
            
          });

    }


    return(
        <>
            <div className='content-login'>
                <div className=' text-right'>
                        <div className="row pt-4">
                                <div className="col">
                                    <img className='logo-login' src={logoSrc} alt='logo' />
                                    
                                    
                                
                                </div>


                        </div>


                </div>
                <div className="row">
                            <div className="col">
                                <img className='frame1' src={frame1} alt='frame1' />  
                                 
                            </div>

                </div>
                <div className="row">
                            <div className="col">
                                <img className='frame2' src={frame2} alt='frame2'onClick={() => signinwithfacebook()} />  
                                 
                            </div>

                </div>
                <div className="row">
                            <div className="col">
                                <img className='frame3' src={frame3} alt='frame3' onClick={() => signinwithgoogle()}/>  
                                 
                            </div>

                </div>
                
                <form onSubmit={handleSubmit} id='Iniciooregistro'>
                <div className="form-floating mb-3"  >
                    <div className='email'>
                        <label className='text-muted' htmlFor='email'>correo</label>
                        <input type="email" onChange={handleInputChange} value={datos.email} className="form-control" id="email" name='email' />
                    </div>
                </div>
                <div className="form-floating" >
                    <div className='contraseña'>
                        <label className='text-muted' htmlFor='password'>contraseña</label>
                        <input type="password" className="form-control"onChange={handleInputChange} value={datos.password}  id="password" name='password' />
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <Link to="/">
                            <button type="submit" className='btn btn-login'> Ingreso </button>
                        </Link>
                    </div>
                </div>
                </form>
                

            </div>
        </>
    )
        
    
}