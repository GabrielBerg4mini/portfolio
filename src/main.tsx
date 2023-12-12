/* eslint-disable react-refresh/only-export-components */
import React from "react"
import ReactDOM from "react-dom/client"
import Stars from "./components/Stars"
import FirstPage from "./components/FirstPage"
import Header from "./components/header"
import ProjectPage from "./components/projectPage"
import Skills from "./components/skills"
import "./Global.css"
import styled from "styled-components"
import { secondColor } from "./components/colors"

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  background: ${secondColor};
  z-index: 9998;
`

const Wrapper = styled.main`
  margin: 0 auto;
  min-height: 298px;
  max-width: 1160px;
  min-height: 100vh;
`
const ContainerContent = styled.section`
  width: 100%;
  min-height: 100vh;
`
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <Stars />
    <Wrapper>
      <ContainerContent>
        <FirstPage />
        <Skills />
        <ProjectPage />
      </ContainerContent>
    </Wrapper>
  </React.StrictMode>
)
