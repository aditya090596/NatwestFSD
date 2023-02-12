import { render, screen } from '@testing-library/react';
import {render as renderer, unmountComponentAtNode} from 'react-dom';
import React from 'react';

import { toHaveStyle } from '@testing-library/jest-dom'
import Footer from '../Components/footer/Footer';

// expect.extend({ toHaveStyle })
describe("Testing Footer component",()=>{
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
        //  console.log("Test executed");
     })
    
     it("1 div in Footer component", () => {
        renderer(<Footer/>,element)
        const count = element.getElementsByTagName('div').length
        expect(count).toBe(2)
    })
    test('should have cont class ', () => {
        render(<Footer/>)
        const divElement = screen.getByTestId('cont')
        expect(divElement).toBeInTheDocument()
    })
 
 test("Should have footer class ",()=>{
    render(<Footer/>)
     expect(screen.getByTestId("footer")).toHaveClass("bg-dark")
 })
})
// test("Should have userclass class in brand-link",()=>{
//     render(<Footer/>)
//      expect(screen.getByTestId("footerbrand")).toHaveClass("copy")
//  })
 