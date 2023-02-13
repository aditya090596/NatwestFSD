import { render, screen } from '@testing-library/react';
import {render as renderer, unmountComponentAtNode} from 'react-dom' //to avoid confusion to use render as renderer//
import Header from '../Components/header/Header';
import React from 'react'
import { toHaveStyle } from '@testing-library/jest-dom'
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
        console.log("Test Executed");
    })
     test("Should Have HOME in header component", ()=>{
        render(<Header/>)
        expect(screen.getByText("Home")).toBeInTheDocument()
     })
     test("Should Have Natwest in header component", ()=>{
        render(<Header/>)
        expect(screen.getByText("Natwest")).toBeInTheDocument()
     })
     it("Should have 8 anchor links in header component",()=>{
        renderer(<Header/>,element)
        const count=element.getElementsByTagName('a').length
        expect(count).toBe(8)
    })
    test("Should have navbar-brand class in brand-link",()=>{
        render(<Header/>)
        expect(screen.getByTestId("testBrand")).toHaveClass("navbar-brand")
    })
})