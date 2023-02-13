import React from 'react'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import Register from './Register';
// please add your test cases here
describe("Testing Register App",()=>{
  let element;
    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    })
    afterEach(() => {
        document.body.removeChild(element);
        element = null;
    })
  test("Should have a text Register  in the page", () => {
    render(<Router><Register/></Router>)
    expect(screen.getByText('Register to Payment App')).toBeInTheDocument();
  })
  test("Should have a Placeholder with text Full Name for the  Name field", () => {
    render(<Router><Register/></Router>)
    expect(screen.getByPlaceholderText('Full Name*')).not.toBeRequired();
  })
})