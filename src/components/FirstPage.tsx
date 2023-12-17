import "../Global.css"
import { useEffect, useCallback } from "react"
import styled from "styled-components"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

import { secondColor } from "./colors"
import eu from "../assets/eu.jpg"
import euMobile from "../assets/eu-mobile.jpg"
import React from "react"

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0.5rem;

  span.typed-text {
    color: #722f37;
  }

  h1 span.cursor {
    display: inline-block;
    background-color: #722f37;
    margin-left: 0.1rem;
    width: 3px;

    animation: blink 1s infinite;
  }

  h1 span.cursor.typing {
    animation: none;
  }

  @keyframes blink {
    0%,
    49%,
    100% {
      background-color: #722f37;
    }
    50%,
    99% {
      background-color: transparent;
    }
  }

  @media (min-width: 769px) and (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding-top: 6rem;

    img {
      width: 80%;
    }
  }
  @media (min-width: 520px) and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
  img {
    width: 80%;
  }

  p {
    font-size: 1rem;
  }

  svg {
    width: 20px;
  }
  @media (max-width: 549px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding-top: 2rem;
  }
`
const H1 = styled.h1`
  color: ${secondColor};
  font-size: 1.7rem;
  letter-spacing: 0.1rem;
  text-align: center;
  overflow: hidden;

  @media (min-width: 769px) and (max-width: 1000px) {
    font-size: 1.68rem;
  }
  @media (min-width: 550px) and (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 549px) {
    font-size: 1rem;
  }
`
const ContainerBiografia = styled.section`
  width: 670px;

  p {
    font-size: 1.4rem;
    color: #181616;
  }
  @media (min-width: 550px) and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    p {
      font-size: 1rem;
    }
  }
  @media (max-width: 549px) {
    width: 100%;
    margin: 0 auto;
    p {
      font-size: 0.9rem;
    }
  }
`
const LinksSocias = styled.a`
  margin-left: 0.5rem;

  svg {
    color: ${secondColor};
    transition: transform 0.4s ease;
    &:hover {
      color: #1b1b1b;
      transform: translateY(-2px);
    }
  }
`
const Caption = styled.p`
  font-size: 1rem;
  color: #020101;
  margin-top: 0.5rem;

  a {
    &:hover {
      color: ${secondColor};
    }
  }
`

const Img = styled.img`
  animation: animate 6s ease-in-out infinite;
  transition: all 1s ease-in-out;

  @keyframes animate {
    0%,
    100% {
      border-radius: 60% 40% 30% 70%/ 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/ 50% 60% 30% 60%;
    }
  }

  &:hover {
    transform: scale(1.02);
    transition: all 1s ease;
    box-shadow: 0 5px 10px ${secondColor};
  }
`

const TypeWriter: React.FC = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const textArray = ["Desenvolvedor Web!"]
  const typingDelay = 200
  const erasingDelay = 100
  const newTextDelay = 2000

  let textArrayIndex = 0
  let charIndex = 0

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const erase = () => {
    const typedTextSpan = document.querySelector(".typed-text")
    const cursorSpan = document.querySelector(".cursor")
    if (typedTextSpan && cursorSpan) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing")

      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        )
        charIndex--
        setTimeout(erase, erasingDelay)
      } else {
        cursorSpan.classList.remove("typing")
        textArrayIndex++
        if (textArrayIndex >= textArray.length) textArrayIndex = 0
        setTimeout(type, typingDelay + 1100)
      }
    }
  }

  const type = useCallback(() => {
    if (charIndex < textArray[textArrayIndex].length) {
      const typedTextSpan = document.querySelector(".typed-text")
      const cursorSpan = document.querySelector(".cursor")
      if (typedTextSpan && cursorSpan) {
        if (!cursorSpan.classList.contains("typing"))
          cursorSpan.classList.add("typing")

        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
        charIndex++
        setTimeout(type, typingDelay)
      }
    } else {
      const cursorSpan = document.querySelector(".cursor")
      if (cursorSpan) cursorSpan.classList.remove("typing")
      setTimeout(erase, newTextDelay)
    }
  }, [charIndex, textArray, textArrayIndex, typingDelay, erase, newTextDelay])

  useEffect(() => {
    if (textArray.length) setTimeout(type, newTextDelay + 250)
  }, [type, textArray.length, newTextDelay])

  return (
    <Container id="firstPage">
      <section>
        <H1>
          Prazer, sou o Gabriel👋
          <span className="typed-text"></span>
          <span className="cursor">&nbsp;</span>
        </H1>
        <ContainerBiografia>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Experiente em ReactJS, NextJS, JavaScript, Styled-Components,
              TailwindCSS, e em constante aprendizado com Node.js, TypeScript e
              APIs REST. Atualmente cursando Análise e Desenvolvimento de
              Sistemas. Apaixonado pelo desenvolvimento web e sempre em busca de
              desafios para aprimorar minhas habilidades.
              <LinksSocias
                href="https://github.com/GabrielBerg4mini"
                target="_blank"
                data-tip="Clique para ir ao meu GitHub"
                title="GitHub"
              >
                <Github />
              </LinksSocias>
              <LinksSocias
                href="https://www.linkedin.com/in/gabriel-bergamini-1424b323b/"
                target="_blank"
                title="LinkedIn"
              >
                <Linkedin />
              </LinksSocias>
              <LinksSocias
                href="mailto:gabrielbergaminioficial@gmail.com"
                title="Gmail"
              >
                <Mail />
              </LinksSocias>
            </p>

            <Caption>
              <a href="mailto:gabrielbergaminioficial@gmail.com">
                Disponível para Freelance
              </a>
            </Caption>
          </motion.section>
        </ContainerBiografia>
      </section>
      <section>
        <source media="(min-width: 600px)" src={euMobile} />
        <a href="https://github.com/GabrielBerg4mini" target="_blank">
          <Img src={eu} alt="eu" />
        </a>
      </section>
    </Container>
  )
}

export default TypeWriter
