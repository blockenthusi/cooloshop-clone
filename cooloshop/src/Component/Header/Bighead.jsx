import { RiSearchLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { AddToCart } from "../Global/Features";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const BigHead = ()=>{

    const ella = useSelector(state=>state.persistedReducer.cart)

    return(
        <div className="BigHeader">
            <div className="bigheadwrap">
               <h4>COLO<span>SHOP</span></h4>
               <div className="Nav">
                
                <ul>
                    <NavLink to="/">
                    <li>Home</li>
                    </NavLink>
                  
                  <li>SHOP</li>
                  <li>PROMOTION</li>
                  <li>PAGES</li>
                  <li>BLOGS</li>
                  <li>CONTACT</li>
                </ul>
                <div className="Usericons">
                    
                <RiSearchLine className="Icons"/>
                <FaUserAlt className="Icons"/>
                <div className="cartt">
                    <NavLink to="/cart">
                    <IoCart className="Icons"/>
                    </NavLink>
                <div className="Nuuum"> {ella.length} </div>
                
                </div>
                </div>
               </div>
            </div>
        </div>
    )
}
export default BigHead