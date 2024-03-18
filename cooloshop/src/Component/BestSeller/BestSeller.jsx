import React from "react";
import "./BestSeller.css";
import { GiSelfLove } from "react-icons/gi";
import { Data } from "../Data/data";
import { ImTruck } from "react-icons/im";
import { BsCash } from "react-icons/bs";
import { ImSpinner11 } from "react-icons/im";
import { IoMdTime } from "react-icons/io";

const BestSeller = () => {
  const cards = [
    {
      icon: <ImTruck  style={{color: "red", fontSize: "30px"}}/>,
      title: "FREE SHIPPING",
      desc: "Suffered Alteration in Some Form",
    },
    {
      icon: <BsCash style={{color: "red", fontSize: "30px"}}/>,
      title: "CASH ON DELIVERY",
      desc: "The Internet Tend To Repeat",
    },
    {
      icon: <ImSpinner11 style={{color: "red", fontSize: "25px"}}/>,
      title: "45 DAYS RETURN",
      desc: "Making It Look Like Readable",
    },
    {
      icon: <IoMdTime style={{color: "red", fontSize: "30px"}}/>,
      title: "OPENING ALL WEEK",
      desc: "8AM - 09PM",
    },
  ];

  return (
    <div className="bestHolder">
      <div className="head">
        <h1>Best Selling</h1>
      </div>
      <div className="rightHand">
        <div className="rightCard">
          {Data?.map((e, index) => (
            <div className="card" key={index}>
              <div className="cardTop">
                <div className="love">
                  <GiSelfLove style={{ color: "white" }} />
                </div>
                <div className="new">New</div>
              </div>
              <div className="image">
                <img src={e.ProductImage} alt="" />
              </div>
              <div className="bottom">
                <p>{e.ProductDs}</p>
                <p style={{ color: "rgb(254, 76, 89)" }}>{e.ProductPrice}</p>
              </div>
              <div className="btn">
                <button>ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="edge">
        <div className="edgeWrap">
          {cards.map((cards) => (
            <>
              <div className="edges">
                <div className="hold">{cards.icon}</div>
                <div className="imgg">
                  <p> {cards.title} </p>
                  <p>{cards.desc}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
