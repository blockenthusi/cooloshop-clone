import React from 'react'
import './Login.css'
import { MdOutlineContactMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from 'react';
import { FaEyeSlash } from "react-icons/fa"
import { FaRegEye } from "react-icons/fa6"
import {ClipLoader} from "react-spinners"



const Login = () =>{

const [showPassword, setShowPassword] = useState(false)
const[email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState({isError:false, type:"", message: ""})
const [loading, setLoading] = useState(false)


    
    const handleShowpassword=()=>{
        setShowPassword(!showPassword)
    }



    const handleLogin = (e) =>{
        e.preventDefault()
        setLoading(true)

        if (!email && !email.includes('@')){
            setError({isError:true, type:'email', message: 'Enter email'})
            setLoading(false)
            
        }else if (!email.includes('@')){
            setError({isError:true, type:'email', message: 'Email must contain @ '})
            setLoading(false)

        }else if (!password && password.length < 8){
            setError({isError:true, type:'password', message: 'Enter password'})
            setLoading(false)
            
        }else if (password.length < 8){
            setError({isError:true, type:'password', message: 'password must be more than 8 char'})
            setLoading(false)

        }else{

            setError({isError:false, type:"", message: ""})
            alert('akwaaba obroni')
            setLoading(false)
        }
    }
    return(
        <div className='loginHold'>
           <div className='loginWrap'>
            <div className='high'>
                <div className='inf'>
                {
                        error.isError && error.type === 'email'  ? <p style={{color: "red"}}>{error.message}</p>:null
                    }
                </div>
            <div className='top'>
               <MdOutlineContactMail style={{fontSize: "12px"}}/>
                <input type="email"
                value={email}  
                placeholder='Email'  onChange={(e) =>setEmail(e.target.value)}/>

            </div>
            </div>
            <div className='high'>
                <div className='inf'>
                
                {
                        error.isError && error.type === 'password'? <p style={{color: "red", fontSize:"10px"}}>{error.message}</p>:null
                    }
                </div>
            <div className='midz'>
                
                <RiLockPasswordFill style={{fontSize: "12px"}}/>
            
            <input type={showPassword?"text":"password"}  value={password} placeholder='Password'  onChange={(e) =>setPassword(e.target.value)}/> 
        {
            showPassword?  <FaRegEye onClick={handleShowpassword} style={{fontSize: "12px"}}/>:<FaEyeSlash onClick={handleShowpassword} style={{fontSize: "12px"}}/>
        }
                </div>
                </div>
            
            <div className='login'>
                <button  onClick={handleLogin}>
                {loading? <ClipLoader color="white" size="8px" />: "Login"}
                </button>
            </div>
           </div>
        </div>
    )
}



export default Login 
