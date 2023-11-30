/* eslint-disable react-refresh/only-export-components */
import React from "react"
import ReactDOM from "react-dom/client"
import Stars from "./components/Stars"
import Header from "./components/Header"
import FirstPage from "./components/FirstPage"
import "./Global.css"
import styled from "styled-components"

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 10%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.283);
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
  background: black;
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
      </ContainerContent>
    </Wrapper>
  </React.StrictMode>
)
