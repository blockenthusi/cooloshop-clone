import React, { useEffect, useState } from "react";

const Mens = () => {
  const [Prod3, setProduct3] = useState();
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct3(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(Prod3);

  return (
    <div className="cardWrap">
     { Prod3?.map((p)=> p.category==="men's clothing"? (
      <div className="cardss" key={p.id}>
        <div className="image">
          <img src={p.image} alt="" />
        </div>
        <div className="des">
          <h3>{p.title}</h3>
          <p>{p.price}</p>
        </div>
      </div>
      ) :null) }
    </div>
  );
};
export default Mens;
