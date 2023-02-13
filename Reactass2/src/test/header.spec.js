import { render, screen } from '@testing-library/react';
import { render as renderer, unmountComponentAtNode } from 'react-dom' //to avoid confusion to use render as renderer//
import Header from '../Components/header/Header';
import { BrowserRouter as Router } from "react-router-dom";
import React from 'react'

// import { toHaveStyle } from '@testing-library/jest-dom'

describe("Testing Header Component", () => {
    let element;
    beforeEach(() => {
        element = document.createElement("div")
        document.body.appendChild(element)
    })
    afterEach(() => {
        unmountComponentAtNode(element)
        element.remove()
        element = null
    })
    test("Demo test", () => {
        
    })

})

test("Should Have Navbar in header component", () => {
    render(
        (<Router><Header /></Router>)

    )
    expect(screen.getByText("NewsManager")).toBeInTheDocument
})



export default Header;