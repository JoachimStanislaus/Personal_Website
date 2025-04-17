import './App.css'
// import * as React from 'react'
import Nav from './components/NavBar'
import Header from './components/Hero'
import ContentGroup from './common_components/ContentGroup'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { ContentItemGenerationProps } from './types/content'
import Contact from './components/Contact'


function App() {
  const color = "teal"

  const staticContentList: ContentItemGenerationProps[] = [
    {
        subheader: "About",
        content: <Contact color={color}></Contact>
    },
    {
        subheader: "Experience",
        content: <Contact color={color}></Contact>
    },
    {
        subheader: "Projects",
        content: <Contact color={color}></Contact>
    },
    {
        subheader: "Contact",
        content: <Contact color={color}></Contact>
    }
  ];

  return (
    <ChakraProvider>
      <Nav></Nav>
      <Header color={color}></Header>
      <ContentGroup color={color} content={staticContentList}></ContentGroup>
    </ChakraProvider>
  )
}

export default App
