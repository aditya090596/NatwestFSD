import { render, screen } from '@testing-library/react';
// import {render as renderer, unmountComponentAtNode} from 'react-dom'
import '@testing-library/jest-dom/extend-expect';
import React from 'react'
import Card from '../Components/card/Card';

describe('Testing Card component', () => {
    test('Demo test', () => { console.log('Test executed'); })
})
test('should have button in card', () => {
    render(<Card/>)
    const buttonElem = screen.getByRole('button', { name: 'Read Later' })
    expect(buttonElem).toBeInTheDocument()
})
test('should have card id', () => {
    render(<Card />)
    const divElement = screen.getByTestId('card')
    expect(divElement).toBeInTheDocument()
})
test('input is not in header', () => {
    render(<Card />)
    const inputElem = screen.queryByRole('input')
    expect(inputElem).not.toBeInTheDocument()
})
test('should have onclick by class id',() => {
    render(<Card />)
    const btnElement = screen.getByTestId('id')
    expect(btnElement).toBeInTheDocument()
})
export default Card;