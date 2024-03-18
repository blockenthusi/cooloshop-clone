import "./Header.css"
import { RiArrowDownSLine } from "react-icons/ri";
import { MdPersonAddAlt1 } from "react-icons/md";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Smallheader =()=>{
 
  const Nav = useNavigate()

  const [show, setShow] =useState(false);

  const showdrop =()=>{
    setShow(true);
  }
  const [show1, setShow1] =useState(false);

   const showEng =()=>{
     setShow1(true);
   }
  const [show2, setShow2] =useState(false);

   const showUsd =()=>{
     setShow2(true);
   }

    return (
      <div className="smallheader">
        <div className="smallheadwrapper">
          <div className="wrapleft">
            <h4>FREE SHIPPING ON ALL U.S ORDERS OVER $50</h4>
          </div>
          <div className="wrapright">
            <h4 className="Usd" onMouseOver={showUsd} >USD  <RiArrowDownSLine /></h4>
           <div className="lineng" onMouseOver={showEng}>
            <h4>English  <RiArrowDownSLine /></h4>
            
           </div>
           <h4 className="myacc" onMouseOver={showdrop}>My Account  <RiArrowDownSLine /></h4>

          
          </div>
 {
  show2?   <div className="myusd"  onMouseLeave={()=>setShow2(false)}>
  <h4>CAD</h4>
  <hr />
  <h4>AUD</h4>
  <hr />
  <h4>EUR</h4>
  <hr />
  <h4>GBP</h4>
 </div> :null
 }

          
    {
      show1?   <div className="English"  onMouseLeave={()=>setShow1(false)}>
      <h4>French</h4>
      <hr />
      <h4>Italian</h4>
      <hr/>
      <h4>German</h4>
      <hr/>
      <h4>Spanish</h4>
    </div> : null
    
    }
    

         {
          show?  <div className="MyAccount"  onMouseLeave={()=>setShow(false)}>
          <h4> <HiMiniArrowRightOnRectangle style={{color:"black", marginRight: "10px", fontSize: "10px", cursor: "pointer"}} onClick={()=>Nav('login')}/>Log In</h4>
          <hr />
          <h4> <MdPersonAddAlt1 style={{color:"black", marginRight: "10px", fontSize: "10px", cursor: "pointer"}} onClick={()=>Nav('register')}/>Register</h4>
        </div> : null
        
          
         }
      
        
          
        </div>
       
      </div>
    )
}
export default Smallheader