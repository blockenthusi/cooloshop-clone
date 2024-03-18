import React, { useState } from 'react'
import "./Registration.css";
import { useSelector } from 'react-redux'
import 'animate.css';
import Screen from '../Screen/Screen';
import { useNavigate } from 'react-router-dom';
// import Categories from '../Categories/Categories';


const Register = () => {
const categoriesData = useSelector((state)=>state.persistedReducer.Allcategories)
console.log(categoriesData)

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [userName, setUserName] = useState("")
const [email, setEmail] = useState("")
const [passWord, setPassWord] = useState("")
const [retypePassword, setRetypePassword] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")
const [categories, setCategories] = useState("")
const [passwordShow, setPasswordShow] = useState(false)
const [popShow, setPopShow] = useState(false)
const [ImageHolder, setImageHolder] = useState("")
const [loading, setLoading] = useState(false)
// const [otp, setOtp] =useState(false)
const Nav = useNavigate()


const [inputErrors, setInPutErrors] = useState({
    firstNameError: false,
    lastNameError: false,
    userNameError: false,
    emailError: false,
    passWordError: false,
    retypePasswordError: false,
    phoneNumberError: false,
    categoriesError: false,
    popShowError: false,
     msg: ""
})

 


const handelFirstName = (e) =>{
    const newValue = e.target.value
    setFirstName(newValue)

    if(newValue.trim() === ""){
        setInPutErrors({firstNameError: true, msg: "You can not leave this field blank"})
    }else{
        setInPutErrors({firstNameError: false})
    }
}
const handelPassWord = (e) =>{
    const newValue = e.target.value
    setPassWord(newValue)   
    if(newValue.trim() === ""){
        setInPutErrors({passWordError: true, msg: "You can not leave this field blank"})
    }else{
        setInPutErrors({passWordError: false})
    }     
}


const handelRetypePassword = (e) =>{
    const newValue = e.target.value
    setRetypePassword(newValue) 
    if(newValue.trim() === ""){
        setInPutErrors({retypePasswordError: true, msg: "You can not leave this field blank"})
    } 
    else{
        setInPutErrors({retypePasswordError: false})
    } 
}
const handelPhoneNumber = (e) =>{
    const newValue = e.target.value
    setPhoneNumber(newValue)   
    if(newValue.trim() === ""){
        setInPutErrors({phoneNumberError: true, msg: "You can not leave this field blank"})
    }else{
        setInPutErrors({phoneNumberError: false})
    }     
}
const handelLastName = (e) =>{
    const newValue = e.target.value
    setLastName(newValue)   
    if(newValue.trim() === ""){
        setInPutErrors({lastNameError: true, msg: "You can not leave this field blank"})
    }else{
        setInPutErrors({lastNameError: false})
    }     
}
const handelUserName = (e) =>{
    const newValue = e.target.value
    setUserName(newValue)  
    if(newValue.trim() === ""){
        setInPutErrors({userNameError: true, msg: "You can not leave this field blank"})
    }else{
        setInPutErrors({userNameError: false})
    }      
}
const handelEmail = (e) =>{
    const newValue = e.target.value
    setEmail(newValue)   
    if(newValue.trim() === ""){
        setInPutErrors({emailError: true, msg: "You can not leave this field blank"})
    }else{
        setInPutErrors({emailError: false})
    }     
}
const handelCategories = (e) =>{
    const newValue = e.target.value
    setCategories(newValue)  
    if(newValue.trim() === ""){
        setInPutErrors({categoriesError: true, msg: "You can not leave this field blank"})
    }else{
        setInPutErrors({categoriesError: false})
    }      
}


const imageHold = (e) =>{
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setImageHolder(url)
}


const handelSubmit = async (data) => { 
    try{
        setLoading(true)
        const res = await axios.post(
            "https://bdsm-aren-a.onrender.com/api/signup",
            data
        )
        if(!firstName || !lastName ||!userName|| !email || !phoneNumber || !passWord || !retypePassword || !categories){
            setTimeout(() => {
                setLoading(false)
                setPopShow(true);
                setInPutErrors({msg: "Please fill all required fields"})
            }, 2000);
        }else{
            console.log(firstName, lastName, email, phoneNumber, passWord, retypePassword, categories, userName)
            setLoading(false)
            setPopShow(true);
            setInPutErrors({msg: "Successfully created"})
            setTimeout(()=>{
                Nav("/otp")
            }, 5000)
                    
        }
    }
    catch(err){
        console.err("error")

    }
   
}



  return (
    <>
    
        {
            loading? (<Screen/>):
            (    <div className='RegisterBody'>
            <div className='WrapperR'>
            <input type="text" placeholder='FirstName'  onChange={handelFirstName}/>
                 {
                    inputErrors.firstNameError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
                }
                
            <input type="text" placeholder='LastName' onChange={handelLastName}/>
                    {
                    inputErrors.lastNameError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
                }
            <input type="text" placeholder='UserName'  onChange={handelUserName}/>
                    {
                    inputErrors.userNameError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
                }
            <input type="text" placeholder='Email'  onChange={handelEmail}/>
                    {
                    inputErrors.emailError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
                }
            <input type={passwordShow?"text":"password"} placeholder='PassWord'  onChange={handelPassWord}/>
                   {
                    inputErrors.passWordError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
                }
            <input type={passwordShow?"text":"password"} placeholder='Retype Password'  onChange={handelRetypePassword}/><button onClick={()=>setPasswordShow(!passwordShow)}>{passwordShow?"Hide":"Show"}</button>
                    {
                    inputErrors.retypePasswordError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
                }
            <input type="text" placeholder='Phone Number'  onChange={handelPhoneNumber}/>
                    {
                    inputErrors.phoneNumberError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
                }
            <select name="" id=""  onChange={handelCategories}>
                <option value="">Choose Categories</option>
                {
                    categoriesData?.map((categoriesdata)=>(
                        <option value={categoriesdata}>{categoriesdata}</option>
                    ))
                }
            
            </select>
                {
                    inputErrors.categoriesError ? <p style={{fontSize: "10px", color: "red"}}>{inputErrors.msg}</p>:null
                }
    
    
    
                <div className='ImgDiv'>
                    <div className='ImgBox'>
                        <img src={ImageHolder} alt='Profile' />
                    </div>
                    <input type="file" id='n'  onChange={imageHold} hidden/>
                    <label htmlFor="n">Upload Image</label>
                </div>
    
    
                <button style={{width: "50%"}} onClick={handelSubmit}>Register</button>
            </div>
    
    
                {
                    popShow ?(
                        <div className='RegisterPop'>
                        <div className='PopCard'>
                        <div className='ClosePop'><span onClick={()=>setPopShow(false)}>X</span></div>
                            <p>{inputErrors.msg}</p>
                        </div>
                     </div>
                    ): null
                }
                
    
        </div>)
        }
    
    </>
  )
}

export default Register