import styled from "styled-components"
import "../Global.css"
import { secondColor, styledHabilidade } from "./colors"
import css from "../assets/svgs/icon-css.svg"
import styledComponent from "../assets/svgs/icon-styled-components.svg"
import { useSpring, animated } from "react-spring"
import js from "../assets/svgs/icon-javascript.svg"
import node from "../assets/svgs/icon-node.svg"
import next from "../assets/svgs/icon-next.svg"
import tailwindcss from "../assets/svgs/icon-tailwindcss.svg"
import bootstrap from "../assets/svgs/icon-bootstrap.svg"
import figma from "../assets/svgs/icon-figma.svg"
import tp from "../assets/svgs/icon-typescript.svg"
import wordpress from "../assets/svgs/icon-wordpress.svg"
import reactIcon from "../assets/svgs/icon-react.svg"
import htmlIcon from "../assets/svgs/icon-html.svg"
import { useEffect, useState } from "react"

const ContainerPrincipal = styled(animated.section)`
  width: 100%;
  height: 100vh;
  display: grid;
  align-content: center;
  overflow: hidden;
  padding: 0.5rem;
`

const H2 = styled.h2`
  text-align: center;
  color: ${secondColor};
  font-size: 1.7rem;
  margin-bottom: 2rem;
`

const SectionHabilidades = styled.article`
  ${styledHabilidade}
  margin-bottom: 5rem;
`
const SectionEstudos = styled.article`
  ${styledHabilidade}
`
const SectionIconSkills = styled.section`
  background: #c0c0c0;
  padding: 0.5rem;
  display: grid;
  justify-items: center;
  align-content: center;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.2rem;
  border-end-end-radius: 2rem;
  width: 120px;
  height: 130px;
  border-bottom: 4px solid #313131;
  transition: all 0.5s ease-in-out;
  p {
    color: #313131;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  img {
    width: 3rem;
  }

  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.05);
    border-bottom: 2px solid #313131;
  }
`

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)

  const containerProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0%" : "translate(-100%)",
    from: { opacity: 0, transform: "translateX(-100%)" },
    delay: 200,
  })

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleScroll = () => {
      const section = document.getElementById("habilidades")
      if (section) {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
        setIsVisible(isVisible)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <ContainerPrincipal id="habilidades" style={containerProps}>
      <H2>Habilidades</H2>

      <SectionHabilidades>
        <SectionIconSkills>
          <p>JavaScript</p>
          <img src={js} alt="Icon Javascript" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>TailwindCSS</p>
          <img src={tailwindcss} alt="Icon tailwindcss" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>CSS-in-JS</p>
          <img src={styledComponent} alt="Icon CSS-in-JS" />
        </SectionIconSkills>

        <SectionIconSkills>
          <p>BootsTrap</p>
          <img src={bootstrap} alt="Icon Bootstrap" />
        </SectionIconSkills>

        <SectionIconSkills>
          <p>WordPress</p>
          <img src={wordpress} alt="Icon WordPress" />
        </SectionIconSkills>

        <SectionIconSkills>
          <p>HTML</p>
          <img src={htmlIcon} alt="Icon HTML" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>CSS</p>
          <img src={css} alt="Icon CSS" />
        </SectionIconSkills>
      </SectionHabilidades>
      <H2>Estudando</H2>
      <SectionEstudos>
        <SectionIconSkills>
          <p>ReactJS</p>
          <img src={reactIcon} alt="Icon React" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>NextJs</p>
          <img src={next} alt="Icon Next" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>TypeScript</p>
          <img src={tp} alt="Icon TypeScript" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>NodeJS</p>
          <img src={node} alt="Icon NodeJS" />
        </SectionIconSkills>
        <SectionIconSkills>
          <p>Figma</p>
          <img src={figma} alt="Icon Figma" />
        </SectionIconSkills>
      </SectionEstudos>
    </ContainerPrincipal>
  )
}

export default Skills
