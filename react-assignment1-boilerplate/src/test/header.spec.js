import { render, screen } from '@testing-library/react';
import {render as renderer, unmountComponentAtNode} from 'react-dom' //to avoid confusion to use render as renderer//
import Header from '../Components/header/Header';
import React from 'react'
import { toHaveStyle } from '@testing-library/jest-dom'
// import { Search } from '@mui/icons-material';
describe("Testing Header Component",()=>{
    let element;
    beforeEach(()=>{
      element= document.createElement("div")
      document.body.appendChild(element)
    })
    afterEach(()=>{
        unmountComponentAtNode(element)
        element.remove()
        element=null
       })    
    test("Demo test",()=>{
        // console.log("Test Executed");
    })
   
     test("Should Have Navbar in header component", ()=>{
        render(<Header/>)
        expect(screen.getByText("NewsManager")).toBeInTheDocument()
     })
     test("Should Have placeholder in header component", ()=>{
        render(<Header/>)
        expect(screen.getByPlaceholderText("Search")).toHaveTextContent
     })
     it("Should have search button in header component",()=>{
        renderer(<Header/>,element)
        expect(screen.getByText("Search")).toBeInTheDocument()
    })
    test("Should have text-light class in brand-link",()=>{
        render(<Header/>)
        expect(screen.getByTestId("homepage")).toHaveClass("text-light")
    })
})
export default Header;