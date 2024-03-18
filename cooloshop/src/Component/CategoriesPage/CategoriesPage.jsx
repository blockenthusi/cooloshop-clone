import React, {useState, useEffect} from 'react'
import './CategoriesPage.css'
import { useParams } from 'react-router-dom'
import { RiArrowDropRightLine } from "react-icons/ri"
import { HiArrowNarrowRight } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineRestartAlt } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import CheckboxOptions from '../DetailPage/DetailPage';


const CategoriesPage = () =>{
    const {categoriesname, id} = useParams()

    const [name, setName] = useState([])

    const[data, setdata] = useState([])
    const[specific, setSpec] = useState([])



    console.log(categoriesname)

    const Specs = `https://fakestoreapi.com/products/category/${categoriesname}`;

    const getSpecData = () => {
      fetch(Specs)
        .then((res) => res.json())
        .then((res) => setSpec(res));
    };
    console.log(specific);
  
    useEffect(()=>{ 
        // fetch('https://fakestoreapi.com/products/categories')
        //  .then(res=>res.json())
        //  .then(res=>setName(res))
        //  .catch(err=>console.log(err))

         getApiData();
         getSpecData ();


}, [])



const url = "https://fakestoreapi.com/products/categories";

  const getApiData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setdata(res));
  };
  console.log(data);


    return(
        <>

        {/* <div>{categoriesname} {id}</div> */}
        <div className='categoriesPageHolder'>
            <div className='wrap'>
                <div className='intro'>
                    <div className='headline'>
                        <p>Home</p>
                        <RiArrowDropRightLine  style={{fontSize: "20px", color: "grey"}}/>
                        <p style={{color: "grey"}}>Men's</p>
                    </div>
                    <hr/>
                </div>

               <div className='secondSession'>
                <div className='headie'>
                    <div className='first'><p style={{fontSize: "20px", fontWeight: "500px", Lineheight: "21.6px"}}>Product Category</p>
                    <div className='mid'>
                        <div className='btn1'>
                            <p>Default sorting</p>
                            <RiArrowDropDownLine />
                        </div>
                        <div className='btn2'>
                            <p>Show</p>
                            <p>6</p>
                            <RiArrowDropDownLine />
                            </div>   
                    </div>
                    </div>

                    <div className='rightie'>
                        <div className='num'>
                            <span className='btt'><button className='btnt'>1</button> <p >of </p> <p>3</p><HiArrowNarrowRight /></span> 
                             
                        </div>
                    </div>
                </div>
               <div className='middle' >
                <div className='lefthand'>
                    {data.length <=0 ? <>
                    
                    <div className='loader'> <MdOutlineRestartAlt style={{color:"blue", fontSize:"30px"}}/></div>
                    </>
                     :
                     <>
                      {data?.map((category, index)=>(
                    <div className='listCart' key={index}>
                    <p>{category}</p>
                   </div>
                ))
            }   
                     </>   
                    }
               
            <p style={{fontSize: "14px"}}>New Arrival</p>
            <p style={{fontSize: "14px"}}>Accessories</p>

            <div className='line'>
                <hr/>
            </div>

            <div className='cate' style={{}}>
                <h3>Filter by price</h3>
                <p>$ 0 - $ 580</p>
                 <div className='steps'>
                    <div className='circle'></div>
                    <div className='lines'style={{backgroundColor:"rgb(254, 76, 89)"}}></div>
                    <div className='circle'></div>
                    <div className='lines' ></div>
                 </div>

                 <div className='last'>
                    Filter
                 </div>
                 <div className='line'>
                    <hr/>
                 </div>

                 <div className='checks'>
                    <h3>Sizes</h3>
                 <CheckboxOptions/>
                 </div>

                 <div className='line'>
                    <hr/>
                 </div>
            </div>

            </div>
            

<div className='rightHand'>
<div className='rightCard'>
{
specific?.map((specific) => (
                            
<div className="card" key={specific.id}>
<div className='cardTop'>
<div className='love'><GiSelfLove style={{color: "white"}}/></div> 
 <div className='new'>New</div>
</div>
<div className='image'>
<img src={specific.image} alt=""/>
</div>
<div className='bottom'>
<p>{specific.title}</p>
<p style={{color: "rgb(254, 76, 89)"}}>${specific.price}</p>
</div>
<div className='btn'>
<button>ADD TO CART</button>
</div>
</div>
))
 }
                        
 </div>
</div>
</div>
             
</div>
            
</div>
</div>
        </>
    )
}


export default CategoriesPage