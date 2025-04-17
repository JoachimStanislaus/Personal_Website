import './App.css'
import * as React from 'react'
import Nav from './nav'
import Header from './Hero'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const color = "teal"

  return (
    <ChakraProvider>
      <Nav></Nav>
      <Header color={color}></Header>
    </ChakraProvider>
  )
}

export default App
