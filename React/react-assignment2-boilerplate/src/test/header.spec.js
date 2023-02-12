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
        //     // console.log("Test Executed");
    })

})

test("Should Have Navbar in header component", () => {
    render(
        (<Router><Header /></Router>)

    )
    expect(screen.getByText("NewsManager")).toBeInTheDocument
})
//  test("Should Have text-light class in header component", ()=>{
//     render(            
//             (<Router><Header /></Router>)

//     )
//     expect(screen.getByText("Dashboard")).toHaveClass("text-light")
//  })

//  it("Should have Register button in header component",()=>{
//     render(  (<Router><Header /></Router>))
//     const buttonElem = screen.getByRole('button', { name: 'Register' })
// expect(buttonElem).toBeInTheDocument()
// })
// test("Should have text-white class in brand-link",()=>{
//     render(

//         (<Router><Header /></Router>)

//         )
//     expect(screen.getByTestId("Nav")).toHaveClass("text-white")
// })
// test('should have onclick by class id',() => {
//     render(<Router><Header /></Router>)
//     const btnElement = screen.getByTestId('id')
//     expect(btnElement).toBeInTheDocument()
// })


export default Header;