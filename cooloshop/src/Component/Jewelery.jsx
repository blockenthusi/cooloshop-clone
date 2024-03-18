import React, { useEffect, useState } from "react";

const Jewelery = () => {
  const [Prod2, setProduct2] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setProduct2(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(Prod2);

  return (
    <div className="cardWrap">
      {Prod2?.map((p) => (
        <div className="cardss" key={p.id}>
          <div className="image">
            <img src={p.image} alt="" />
          </div>
          <div className="des">
            <h3>{p.title}</h3>
            <p>{p.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Jewelery;
