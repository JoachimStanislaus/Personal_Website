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
import Footer from './common_components/Footer'


function App() {
  const color = "teal"

  const staticContentList: ContentItemGenerationProps[] = [
    {
      subheader: "About",
      content: <Text color={"gray.400"} fontSize={"xl"} px={4}>
        Hey there! I'm Joachim Stanislaus Tan. I'm currently a Frontend Developer @ UBS, working on Pre-trade & Post-trade Transaction Cost Analysis(TCA) Equities & Fx and a FX Orders Management System (Creation & Amendments). I graduated from the University of Exeter with a Bsc Computer Science and a Diploma in Computer Science from Singapore Polytechnic where I acquired skills in machine learning and programming. <br></br><br></br>With a passion for building things, I use my free time to build things I want to see in the world. I am always on the lookout for opportunities to improve myself and my skills. Being able to code we are empowered to breath life into projects that can do so much good for the world, and with great power comes great responsibility. I hope to be able to pursue some passion projects to improve the world in the future!
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
