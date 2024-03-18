
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Categories.css'
import electronics from "../../assets/electronics.jpg"
import banner_3 from "../../assets/banner_3.jpg"
import banner_1 from "../../assets/banner_1.jpg"
import ring from "../../assets/ring.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { GetAllcategories } from '../Global/Features'


const Categories = () =>{
    // const [categories, setCategories] = useState([])
    const Nav = useNavigate()

    const cat = useSelector((state)=>state.persistedReducer.Allcategories)
    const dispatch = useDispatch()
   

    useEffect(()=>{ 
            fetch('https://fakestoreapi.com/products/categories')
             .then(res=>res.json())
             .then(data=> dispatch(GetAllcategories(data)))
             .catch(err=>console.log(err))

}, [])



console.log(cat)
    return (
    
        <div className='categoriesBody'>
            <div className='categoriesWrap'>
                
                    {cat?.map((category, index)=>(
                    <div className='categoriesCardFrame' style={{backgroundImage: category === "electronics" ? `url(${electronics})`: category === "jewelery"? `url(${ring})`: category === "women's clothing"? `url(${banner_1})`: category === "men's clothing"? `url(${banner_3})`: null}} >

                    <div className='categoriesCardTextHolder' onClick={()=>Nav(`categories/${index}/${category}`)}>
                        {category}
                    </div>
                </div>
                ))
                }
                   
            </div>

            
        </div>
        
    )
 }
export default Categories