import React from "react"
import styled from "styled-components"
import preload from "../assets/logo-preload.webp"
import { secondColor } from "./colors"

const PreloadContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e7e6e6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 9999;
  @media (max-width: 768px) {
    background-color: #e7e6e6;
  }
`
const Img = styled.img`
  width: 18rem;
  height: 18rem;
`

const PreloadSpinner = styled.article`
  border: 8px solid #f3f3f3;
  border-top: 8px solid ${secondColor};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Preload: React.FC = () => {
  return (
    <PreloadContainer>
      <Img src={preload} alt="preload" />
      <PreloadSpinner />
    </PreloadContainer>
  )
}

export default Preload
