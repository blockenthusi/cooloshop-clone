import React, { useEffect } from "react";
import { AddToCart, GetAllProduct } from "./Global/Features";
import { GiSelfLove } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const AllProduct = () => {
  // const [Prod, setProduct] = useState([]);

 

  const dispatch = useDispatch()

  const Products = useSelector ((state) => state.persistedReducer.Allproducts)

  const Product = Products.slice(0, 5);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(data => dispatch(GetAllProduct(data)))
      .catch((err) => console.log("my",err));
  }, []);

  console.log(Product);

  const handlecart= (p)=>{
    dispatch(AddToCart(p))
  }
  return (
    <>
      <div className="cardWrap">
        {Product?.map((p) => (
          <div className="cardss" key={p.id} onClick={()=>handlecart(p)}>
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
    </>
  );
};

export default AllProduct;
