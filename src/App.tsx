import './App.css'
import * as React from 'react'
import Nav from './nav'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  return (
    <ChakraProvider>
      <Nav></Nav>
      
    </ChakraProvider>
  )
}

export default App
