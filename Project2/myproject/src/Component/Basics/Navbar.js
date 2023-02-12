import React from 'react'

const  Navbar=({filteritem,menuList})=> {
  return (
    <>
      <nav className='navbar'>
      <div className="btn-group">

    {menuList.map((curEle)=>{
return <button className="btn-group__item"   onClick={()=> filteritem(curEle)}>{curEle}</button>
    })}
       
        
        </div>
    </nav>
    </>
  )
}
export default Navbar;
