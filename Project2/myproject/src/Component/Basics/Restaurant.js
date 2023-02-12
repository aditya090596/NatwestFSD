import React, { useState } from 'react'
import  "./style.css"
import Menu from '../menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'


const Restaurant = () => {
    const uniqueList =
    [...new Set(Menu.map((curElem)=>{
  return   curElem.category;
  })),"All"]
  console.log(uniqueList);
   const[menuData,setMenuData]= useState(Menu);
   const[menuList,setMenuList]=useState(uniqueList);
//    console.log("test");
//    console.log(Menu);
const filteritem = (cat) =>{

    if  (cat === "All"){
       return  setMenuData(Menu)
    } else {
   const updatedList= Menu.filter((curElem)=>{
    return curElem.category===cat});
   setMenuData(updatedList);
}
}
    
  return (
    <>
    <Navbar filteritem ={filteritem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant
