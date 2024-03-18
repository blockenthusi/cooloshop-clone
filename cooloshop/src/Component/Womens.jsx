import React, { useEffect, useState } from "react"

const Women =()=>{
 
        const [Prod4, setProduct4] = useState([]);
        const Product = Prod4.slice(0, 5);
       
        useEffect(() => {
            fetch("https://fakestoreapi.com/products/category/women's clothing")
                .then(res => res.json())
                .then((data) => setProduct4(data))
                .catch(err => console.log(err))
        }, [])
    
    console.log(Product)
        
             return(

                <div className="cardWrap">
     {Product?.map((p)=> p.category==="women's clothing"? (
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
                // Prod4?.map((i)=> i.category === "women's clothing" ?
                // (
                //     <div className="Allproductcard">
                //         <div className="productimg">
                //             <img src={i.image} alt="" />
                //         </div>
                //         <div className="text">
                //             <h5>{i.title}</h5>
                //             {/* <h5>{i.category}</h5> */}
                //             <p>${i.price}</p>
                //         </div>
                //         <button className="productbtn Active">Add to chart</button>
                //     </div>
                // ):null )
        
                       
    )
}
export default Women