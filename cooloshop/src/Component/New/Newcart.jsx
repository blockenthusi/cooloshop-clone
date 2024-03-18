import React from "react";
import "./Newcart.css"
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import { Remove } from "../Global/Features";
import { useDispatch } from "react-redux";

const Newcart =() =>{
    
  const cart = useSelector((state) => state.persistedReducer.cart);
  const ella = useSelector(state=>state.persistedReducer.cart)

  const dispatch = useDispatch()

  const removeItem = (id) =>{
    dispatch(Remove({id}))
  }
  console.log(removeItem)
   
  return(
        <div className="New">
            <div className="newWrap">
                <h1>Cart Items {ella.length}</h1>
                <div className="headlines">
                            <div className="left">
                                {/* <p>Items</p> */}
                            </div>
                            <div className="right">
                                <p>Price</p>
                                <p>Quantity</p>
                                <p>Remove</p>
                            </div>
                            </div>
                            <div className="stroke">
                            </div>
                <div className="cardWrapp">
                    {cart.map((cart) => (
                         <div className="newCard" key={cart.id}>
                         <div className="rightz">
                             <div className="imgz">
                             <img src={cart.image} />
                             </div>
                             <h4>{cart.title}</h4>
                         </div>

                         <div className="leftz">
                             <p>{cart.price}</p>
                             <p>Quantity</p>
                             <MdCancel style={{ color: "#ff4d58ff", cursor: "pointer" }} onClick={() =>removeItem(cart.id)}/>
                         </div>
                     </div>
                    ))}
                   
                        <div className="stroke">
                            </div>
                    </div>
            </div>
        </div>
    )
}




export default Newcart