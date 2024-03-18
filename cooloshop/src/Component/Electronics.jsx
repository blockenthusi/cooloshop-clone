import React, { useEffect, useState } from "react"

const Electronics =()=>{
   
        const [Product, setProduct] = useState([])
        

        useEffect(() => {
            fetch('https://fakestoreapi.com/products/category/electronics')
                .then(res => res.json())
                .then(data => setProduct(data))
                .catch(err => console.log(err))
        }, [])
    
    // console.log(Prod1)
    const prod=Product.slice(0,5)
    console.log(prod)
        
            
           return(   
            <div className="cardWrap">
            {prod?.map((p) => (
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
                
    )
}
export default Electronics