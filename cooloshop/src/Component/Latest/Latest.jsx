import React, {useState} from 'react';
import Pop from '../Pop/Pop';


import "./Latest.css"
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { FaSkype } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";
import { GiSelfLove } from "react-icons/gi";


const Latest = () =>{
    const [poping, setPoping] = useState(false)
    const fyx = () =>{
        setPoping(true)
    }

    const card = [
        {
          image: "https://themewagon.github.io/coloshop/images/blog_1.jpg",
          alt: "img1",
         
        },
        {
          image: "https://themewagon.github.io/coloshop/images/blog_2.jpg",
          alt: "img2",
          
        },
        {
          image: "https://themewagon.github.io/coloshop/images/blog_3.jpg",
          alt: "img3",
          
        },
       
      ];
    return(
        <div className='latestHolder'>
            <div className='late'>
                <h1>Lastest Blogs</h1>
            </div>

            <div className='blogs'>
                <div className='blogCard'>
                {card?.map((props) =>(
                     <div className='cards' onMouseOver={fyx}>
                     <img src={props.image} alt={props.alt} />
                 </div>
                    ))}
                   
                   {poping ? <Pop onMouseLeave={() => setPoping(false)} />
                   : null}
                </div>
                   
            </div>

            <div className='news'>
                <div className='newsWrap'>
                    <div className='textz'>
                        <h3 style={{fontSize:"20px"}}>Newsletter</h3>
                        <p style={{fontSize: "14px",fontWeight: "500",lineHeight: "23.8px"}}>Subscribe to our newsletter and get 20% off your purchase</p>
                    </div>
                    <div className='fields'>
                        <input type="text" placeholder="Your email" className='inputs'/>
                        
                    
                        <button className='btnnn'>Subscribe</button>
                    
                        
                    </div>
                </div>
            </div>

            <div className='directory'>
                <div className='dirWrap'>
                    <div className='lif'>
                        <p>Blogs</p>
                        <p>FAQs</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='rit'>
                        <div className='icon'>
                        <TiSocialFacebook />
                        </div>
                    
                    <div className='icon'><AiOutlineTwitter /></div>
                    <div className='icon'><IoLogoInstagram /></div>
                    <div className='icon'><FaSkype /></div>
                    <div className='icon'><IoLogoPinterest /></div>
                    
                    </div>

                  
                </div>
                <div className='lastie'>
                        <p>©2018 All Rights Reserverd. Made with <GiSelfLove  style={{color: "red"}}/> by <span className='tic'>Colorlib</span> & distributed by <span className='tic'>ThemeWagon</span></p>
                    </div>
            </div>
            
        </div>
    )
}



export default Latest