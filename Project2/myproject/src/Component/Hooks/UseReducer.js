import React, { useReducer } from 'react'
import  "./style.css"
 const reducer = (state,action)=> {
    if (action.type === "INCR"){
        state= state+1;
        console.log(state);
    }
    if (state>0 && action.type === "DECR"){
        state= state-1
    }

    return state;
 }
const UseReducer = () => {

const initialData=10;
   const[state,dispatch] = useReducer( reducer,initialData);
   // disptacher triggers reducer
  return (
    <>
       <div className="center_div">
       <p>{state}</p>
        <div className="button2" onClick={()=>dispatch({type:"INCR"})}  >
            {/* // dispatch tells what action needs to be taken */}
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
        className="button2"  onClick={()=>dispatch({type:"DECR"})}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  )
}

export default UseReducer
