import './App.css'
// import * as React from 'react'
import Nav from './components/NavBar'
import Header from './components/Hero'
import ContentGroup from './common_components/ContentGroup'

// 1. import `ChakraProvider` component
import { ChakraProvider, Text } from '@chakra-ui/react'
import { ContentItemGenerationProps } from './types/content'
import Contact from './components/Contact'
import ExperienceGrid from './components/Experience'
import ProjectsGrid from './components/Projects'
import Footer from './common_components/Footer'


function App() {
  const color = "teal"

  const staticContentList: ContentItemGenerationProps[] = [
    {
      subheader: "About",
      content: <Text color={"gray.600"} fontSize={"xl"} px={4}>
        write about section here
      </Text>
    },
    {
      subheader: "Experience",
      content: <ExperienceGrid></ExperienceGrid>
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
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default App
