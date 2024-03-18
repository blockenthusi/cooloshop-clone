import React, {useState} from "react"
import AllProduct from "../AllProduct"
import Electronics from "../Electronics"
import Jewelery from "../Jewelery"
import "./NewArrival.css"
import Women from "../Womens"
import Mens from "../Mens"
import { FaAllergies } from "react-icons/fa"

const NewArrival =()=>{
 const [AllProductdata, setAllProductdata] =useState(true)
 const [Electronicdata, setElectronicdata] =useState(false)
 const [accessoriesdata, setaccessoiesdata] =useState(false)
 const [mensdata, setmensdata] =useState(false)
 const [womensdata, setwomensdata] =useState(false)
 const [active, setActive] =useState("Active")


 const changeStateAllProduct=()=>{
   setAllProductdata(true);
   setElectronicdata(false);
   setaccessoiesdata(false);
   setmensdata(false);
   setwomensdata(false);

 }
 const changeStateEle=()=>{
   setAllProductdata(false);
   setElectronicdata(true);
   setaccessoiesdata(false);
   setmensdata(false);
   setwomensdata(false);

 }
 const changeStateAcc=()=>{
   setAllProductdata(false);
   setElectronicdata(false);
   setaccessoiesdata(true);
   setmensdata(false);
   setwomensdata(false);

 }
 const changeStateMen=()=>{
   setAllProductdata(false);
   setElectronicdata(false);
   setaccessoiesdata(false);
   setmensdata(true);
   setwomensdata(false);

 }
 const changeStateWomen=()=>{
   setAllProductdata(false);
   setElectronicdata(false);
   setaccessoiesdata(false);
   setmensdata(false);
   setwomensdata(true);

 }
   
    return(
       <div className="NewArrivalbox">
          <div className="newarrival">
            <h1>New Arrivals</h1>
          </div>
          <div className="Product">
          <div className={`productbox ${AllProductdata? active: null}`} onClick={changeStateAllProduct}>All</div>
          <div  className={`productbox ${Electronicdata? active: null}`} onClick={changeStateEle}>Electronics</div>
          <div  className={`productbox ${accessoriesdata? active: null}`} onClick={changeStateAcc}>Jewelery</div>
          <div  className={`productbox ${mensdata? active: null}`} onClick={changeStateMen}>Men's</div>
          <div  className={`productbox ${womensdata? active:null}`} onClick={changeStateWomen}>Women's</div>
          </div>

          <div className="cardHolder">
            {
            AllProductdata? <AllProduct/>:
            Electronicdata?  <Electronics/>:
            accessoriesdata?  <Jewelery/>:
            mensdata?  <Mens/>:
            womensdata?   <Women/>:
            null
            }
            
            
            </div>
       </div>

      
    )
}
export default NewArrival



