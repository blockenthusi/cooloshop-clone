import React from "react";
import HeroPage from "../Hero/HeroPage";
import Categories from "../Categories/Categories";
import CategoriesPage from "../CategoriesPage/CategoriesPage";
import NewArrival from "../NewArrival/NewArrival";
import AfterArrival from "../AfterArrival/AfterArrival";
import BestSeller from "../BestSeller/BestSeller";
import Latest from "../Latest/Latest";
// import Newcart from "../New/Newcart";





const Mainland = () =>{
    return(
        <>
        <HeroPage/>
        <Categories/>
        {/* <CategoriesPage/> */}
       <NewArrival/>
       <AfterArrival/>
        <BestSeller/>
        <Latest/>
        </>
    )
}


export default Mainland