import { render, screen } from '@testing-library/react'
import App from './App'
import React from 'react'

describe('Testing the Main App', () => {
  test('Test Title of the Application', () => {
    render(<App />)
    const titleElement = screen.getByText(/This React App is deployed at Azure/i)
    expect(titleElement).toBeInTheDocument()
  })
})
