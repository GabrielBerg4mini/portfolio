import "../Global.css"
import { useEffect, useCallback } from "react"
import styled from "styled-components"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Tooltip from "../hooks/tooltip"
import { secondColor } from "./colors"
import eu from "../assets/eu.jpg"
import React from "react"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0.5rem;

  span.typed-text {
    color: #2691e9;
  }

  h1 span.cursor {
    display: inline-block;
    background-color: #2691e9;
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
      background-color: #2691e9;
    }
    50%,
    99% {
      background-color: transparent;
    }
  }
`

const H1 = styled.h1`
  color: ${secondColor};
  font-size: 1.7rem;
  letter-spacing: 0.1rem;
  text-align: center;
  overflow: hidden;
`
const ContainerBiografia = styled.section`
  width: 670px;
  text-align: justify;

  div {
    font-size: 1.4rem;
    color: #181616;
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
  color: ${secondColor};
  margin-top: 0.5rem;

  a {
    &:hover {
      color: #020101;
    }
  }
`

const Img = styled.img`
  animation: border 6s infinite ease-in-out;
  transition: all 1s ease;

  @keyframes border {
    0%,
    100% {
      border-radius: 12rem 8rem 20rem 15rem;
    }
    25%,
    75% {
      border-radius: 14rem 18rem 12rem 16rem;
    }
    50% {
      border-radius: 15rem 20rem 18rem 22rem;
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Experiente em ReactJS, NextJS, JavaScript, Styled-Components,
            TailwindCSS, e em constante aprendizado com Node.js, TypeScript e
            APIs REST. Atualmente cursando Análise e Desenvolvimento de
            Sistemas. Apaixonado pelo desenvolvimento web e sempre em busca de
            desafios para aprimorar minhas habilidades.
            <Tooltip text="GitHub">
              <LinksSocias
                href="https://github.com/GabrielBerg4mini"
                target="_blank"
                data-tip="Clique para ir ao meu GitHub"
              >
                <Github />
              </LinksSocias>
            </Tooltip>
            <Tooltip text="LinkedIn">
              <LinksSocias
                href="https://www.linkedin.com/in/gabriel-bergamini-1424b323b/"
                target="_blank"
              >
                <Linkedin />
              </LinksSocias>
            </Tooltip>
            <Tooltip text="Email">
              <LinksSocias href="mailto:gabrielbergaminioficial@gmail.com">
                <Mail />
              </LinksSocias>
            </Tooltip>
            <Caption>
              <a href="mailto:gabrielbergaminioficial@gmail.com">
                Disponível para Freelance
              </a>
            </Caption>
          </motion.div>
        </ContainerBiografia>
      </section>
      <section>
        <a href="https://github.com/GabrielBerg4mini" target="_blank">
          <Img src={eu} alt="Eu" />
        </a>
      </section>
    </Container>
  )
}

export default TypeWriter
