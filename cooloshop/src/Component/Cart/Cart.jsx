// import React from "react";
// import "./Cart.css";
// import { MdOutlineEventAvailable } from "react-icons/md";
// import { IoMdAdd } from "react-icons/io";
// import { FaMinus } from "react-icons/fa6";
// import { MdCancel } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Remove } from "../Global/Features";
// import { useDispatch } from "react-redux";

// const Cart = () => {
//   // const cart = useSelector((state) => state.persistedReducer.cart);
//   // console.log(cart);

//   // const dispatch = useDispatch()

//   // const removeItem = (id) =>{
//   //   dispatch(Remove({id}))
//   // }
//   // console.log(removeItem)
//   // return (
//     <>
//       <div className="cartHolder">
//         <div className="cartWrap">
//           <div className="shipHead">
//             <span className="info">
//               <p>FREE STANDARD DELIVERY OVER $58</p>
//             </span>
//             <span className="info">
//               <p>ORDER BY 10PM FOR NEXT DAY DELIVERY</p>
//             </span>
//             <span className="info">
//               <p>FREE CLICK & COLLECT WITHIN 2HOURS</p>
//             </span>
//           </div>
//           <div className="cartSection">
//             <p style={{ fontWeight: "bold", fontSize: "24px" }}>Your Basket!</p>
//             <p style={{ color: "#ff4d58ff" }}>You sure have a great taste</p>
//             <div className="cardsHold">
//               <div className="leftCard">
//                 {cart.map((cart) => (
//                   <div className="cardz" key={cart.id}>
//                     <div className="top">
//                       <MdCancel style={{ color: "#ff4d58ff", cursor: "pointer" }} onClick={() =>removeItem(cart.id)}/>
//                     </div>

//                     <div className="below">
//                       <div className="imagesss">
//                         <img src="" alt="" />
//                       </div>
//                       <div className="vertical"></div>
//                       <div className="details">
//                         <div className="title">
//                           <p>{cart.title}</p>
//                         </div>
//                         <div className="options">
//                           <div className="option">
//                             <MdOutlineEventAvailable
//                               style={{ color: "green" }}
//                             />
//                             <p>Click & Collect</p>
//                           </div>
//                           <div className="option">
//                             <MdOutlineEventAvailable
//                               style={{ color: "green" }}
//                             />
//                             <p>Home Delivery</p>
//                           </div>
//                         </div>
//                         <hr />
//                         <div className="quantity">
//                           <p style={{ fontSize: "14px", fontWeight: "900" }}>
//                             Qty:
//                           </p>
//                           <div className="numz">
//                             <FaMinus />
//                             <div className="v"></div>
//                             <p>1</p>
//                             <div className="v"></div>
//                             <IoMdAdd />
//                           </div>
//                           <p>price</p>
//                           <p style={{ fontWeight: "700" }}>Total Price</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* <div className="sumCard">
//                 <div className="stop">
//                   <div className="homeButton">
//                     <label>
//                       <input type="checkbox" />
//                       Home Delivery
//                     </label>
//                   </div>
//                   <div className="clickButton">
//                     <label>
//                       <input type="checkbox" />
//                       Click & Collect
//                     </label>
//                   </div>
//                 </div>
//                 <hr />
//                 <div className="text">
//                   <p>Subtotal</p>
//                   <p>price</p>
//                 </div>
//                 <div className="text">
//                   <p>Delivery</p>
//                   <p>price</p>
//                 </div>
//                 <hr />
//                 <div className="text">
//                   <p>Total</p>
//                   <p>price</p>
//                 </div>

//                 <div className="btns">
//                   <Link to="/">
//                     <button>Checkout</button>
//                   </Link>
//                 </div>
//               </div> */}
//             </div>
//           </div>
//           <div className="infoCard">
//             <div className="downCard">
//               <div className="up">
//                 <h3>Delivery Information</h3>
//                 <p>Standard delivery is 2 - 4 working days.</p>
//               </div>
//               <div className="down">
//                 <h3>Need It Faster?</h3>
//                 <p>
//                   You can upgrade to{" "}
//                   <span className="separate">
//                     Next Day Delivery(order before 10pm)
//                   </span>
//                 </p>
//                 <p>
//                   Any order placed after 10pm friday and over the weekend will
//                   not be dispatched until monday{" "}
//                 </p>

//                 <p>Free returens to any Cooloshop near you</p>
//                 <p style={{ color: "#ff4d58ff", fontWeight: "bold" }}>
//                   Happy Buying Experience!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;
