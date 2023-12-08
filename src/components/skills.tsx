import styled from "styled-components"
import "../Global.css"
import { secondColor, styledHabilidade } from "./colors"
import Js from "../assets/svgs/icon-javascript.svg"
import Css from "../assets/svgs/icon-css.svg"
import Html from "../assets/svgs/icon-html.svg"
import CssInJs from "../assets/svgs/icon-css-in-js.svg"
import React from "../assets/svgs/icon-react.svg"
import Tailwindcss from "../assets/svgs/icon-tailwindcss.svg"
import Bootstrap from "../assets/svgs/icon-bootstrap.svg"
import Wordpress from "../assets/svgs/icon-wordpress.svg"
import Next from "../assets/svgs/icon-next.svg"
import Node from "../assets/svgs/icon-node.svg"
import Typescript from "../assets/svgs/icon-typescript.svg"
import Figma from "../assets/svgs/icon-figma.svg"

const ContainerPrincipal = styled.section`
  width: 100%;
  height: 100vh;

  display: grid;
  align-content: center;
`

const H2 = styled.h2`
  text-align: center;
  color: ${secondColor};
  font-size: 1.7rem;
`

const SectionHabilidades = styled.article`
  ${styledHabilidade}
  margin-bottom: 2rem;
`
const SectionEstudos = styled.article`
  ${styledHabilidade}
`
const SectionIconSkills = styled.section`
  background: #0a0a0a;
  padding: 0.5rem;
  display: grid;
  justify-items: center;
  align-content: center;
  border-top-left-radius: 2rem;
  width: 120px;
  height: 130px;
  border-bottom: 4px solid ${secondColor};
  transition: all 0.5s ease-in-out;
  p {
    color: ${secondColor};
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  img {
    width: 3rem;
  }

  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.05);
    border-bottom: 2px solid ${secondColor};
  }
`

const Skills = () => {
  return (
    <ContainerPrincipal>
      <H2>Habilidades</H2>

      <SectionHabilidades>
        <SectionIconSkills>
          <p>JavaScript</p>
          <img src={Js} alt="Icon Javascript" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>TailwindCSS</p>
          <img src={Tailwindcss} alt="Icon tailwindcss" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>CSS-in-JS</p>
          <img src={CssInJs} alt="Icon CSS-in-JS" />
        </SectionIconSkills>

        <SectionIconSkills>
          <p>BootsTrap</p>
          <img src={Bootstrap} alt="Icon Bootstrap" />
        </SectionIconSkills>

        <SectionIconSkills>
          <p>WordPress</p>
          <img src={Wordpress} alt="Icon WordPress" />
        </SectionIconSkills>

        <SectionIconSkills>
          <p>HTML</p>
          <img src={Html} alt="Icon HTML" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>CSS</p>
          <img src={Css} alt="Icon CSS" />
        </SectionIconSkills>
      </SectionHabilidades>
      <H2>Estudando</H2>
      <SectionEstudos>
        <SectionIconSkills>
          <p>ReactJS</p>
          <img src={React} alt="Icon React" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>NextJs</p>
          <img src={Next} alt="Icon Next" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>TypeScript</p>
          <img src={Typescript} alt="Icon TypeScript" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>NodeJS</p>
          <img src={Node} alt="Icon NodeJS" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>Figma</p>
          <img src={Figma} alt="Icon Figma" />
        </SectionIconSkills>
      </SectionEstudos>
    </ContainerPrincipal>
  )
}

export default Skills
