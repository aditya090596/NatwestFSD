import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log("menucard");
    // console.log(menuData);
    
  return (
    <>
   
      <section className="main-card--cointainer">
    {menuData.map((curEle)=>{
         const {id,name,description,image,category} =curEle;
         // destructuring (do not repeat)
    return (
        <>
        <div className='card-container' key={id}>
      <div className='card'>
      <div className='card-body'>
        <span className='card-number card-circle subtle'>{id}</span>
        <span className='card-author subtle' >{name}</span>
        <h3 className='card-title'>{category}</h3>
        <span className='card-description subtle' >{description}</span>
        <div className='card-read'>Read</div>
        <img src={image} alt="images" className='card-media' />
        <span className='card-tag subtle' >Order now</span>

      </div>
      </div>
      </div>
        </>
    )}
    )}
      </section>
    </>
  )
}

export default MenuCard
