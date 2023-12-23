import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom/client"
import Stars from "./components/Stars"
import FirstPage from "./components/FirstPage"
import Header from "./components/header"
import ProjectPage from "./components/projectPage"
import Skills from "./components/skills"
import "./Global.css"
import styled from "styled-components"
import { secondColor } from "./components/colors"
import FooterContainer from "./components/footer"
import Preload from "./components/preloader"

interface WrapperProps {
  isLoading: boolean
}

// eslint-disable-next-line react-refresh/only-export-components
const Wrapper = styled.main<WrapperProps>`
  margin: 0 auto;
  min-height: 298px;
  max-width: 1160px;
  min-height: 100vh;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
  transition: opacity 1s ease;
`

interface ContainerContentProps {
  isLoading: boolean
}

// eslint-disable-next-line react-refresh/only-export-components
const ContainerContent = styled.section<ContainerContentProps>`
  width: 100%;
  min-height: 100vh;
  transform: translateY(${({ isLoading }) => (isLoading ? "20px" : "0")});
  transition: transform 0.5s ease;
`

// eslint-disable-next-line react-refresh/only-export-components
const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  background: ${secondColor};
  z-index: 9998;
  transition: background 0.5s ease;
`

// eslint-disable-next-line react-refresh/only-export-components
const Footer = styled.footer`
  margin-top: 10rem;
  width: 100%;
  background: ${secondColor};
`

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula o carregamento da página (tempo para teste)
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Ajuste conforme necessário

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <React.StrictMode>
      {isLoading && <Preload />}
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Stars />
      <Wrapper isLoading={isLoading}>
        <ContainerContent isLoading={isLoading}>
          <FirstPage />
          <Skills />
          <ProjectPage />
        </ContainerContent>
      </Wrapper>
      <Footer>
        <FooterContainer />
      </Footer>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />)
