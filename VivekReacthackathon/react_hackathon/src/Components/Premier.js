import React from 'react'
import premier1 from "../images/premier1.jpg";
import premier2 from "../images/premier2.jpg";
import permier3 from "../images/permier3.jpg";
import permier4 from "../images/permier4.jpg";
import Scroll from "./Scroll";

export default function Premier() {
    return (
        <>
            <div>
                <img src={premier1} className='img-fluid shadow-4' alt='...' />
                <img src={premier2} className='img-fluid shadow-4' alt='...' />
                <img src={permier3} className='img-fluid shadow-4' alt='...' />
                <img src={permier4} className='img-fluid shadow-4' alt='...' />
            </div>
            <Scroll />
        </>
    )
}
