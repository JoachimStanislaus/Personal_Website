import './App.css'
// import * as React from 'react'
import Nav from './components/NavBar'
import Header from './components/Hero'
import About from './About'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  const color = "teal"

  return (
    <ChakraProvider>
      <Nav></Nav>
      <Header color={color}></Header>
      <About color={color} count='01' subheader='About' content='test' ></About>
    </ChakraProvider>
  )
}

export default App
