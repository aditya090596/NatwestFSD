import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import NavigationIcon from '@mui/icons-material/Navigation';


export default function Scroll() {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        })
    }, [])

    const scrollup = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {visible && (

                <Button sx={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "50px",
                    width: "50px",
                    fontsize: "50px",
                }} onClick={scrollup} variant="contained">
                    <NavigationIcon />
                    Top
                </Button>
            )}
        </div>
    )
}
