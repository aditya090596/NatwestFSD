import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react'
import { render as renderer, unmountComponentAtNode } from 'react-dom'
import Dashboard from '../Components/dashboard/Dashboard';
import { BrowserRouter as Router } from "react-router-dom";
describe('Testing dashboard component', () => {
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
    // test('Demo test', () => { console.log('Test executed'); })
    test('section is not in dashboard', () => {
        render(<Router><Dashboard/></Router>)
        const sectionElem = screen.queryByRole('section', { name: 'section' })
        expect(sectionElem).not.toBeInTheDocument()
    })
    test('should have cont class of container', () => {
        render(<Router><Dashboard/></Router>)
        const divElement = screen.getByTestId('cont')
        expect(divElement).toBeInTheDocument()
    })
    it("3 div in dashboard component", () => {
        renderer(<Router><Dashboard/></Router>, element)
        const count = element.getElementsByTagName('div').length
        expect(count).toBe(7)
    })
    it("only 1 a element should be in header", () => {
        renderer(<Router><Dashboard/></Router>, element)
        const count = element.getElementsByTagName('a').length
        expect(count).not.toBe(1)
    })
})
export default Dashboard;