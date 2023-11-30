import "../Global.css"
import { styled } from "styled-components"
import { Github, Linkedin } from "lucide-react"
import { primaryColor, secondColor } from "./colors"

const ContainerNavAndImgs = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 1rem;
`

const UlNavigation = styled.ul`
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`
const LinkContato = styled.a`
  svg {
    width: 30px;
    height: 30px;
    transition: all 0.3s ease-in;
  }

  &:hover {
    svg {
      transform: scale(1.1);
      transition: all 0.6s ease-in;
      color: ${secondColor};
    }
  }
`
const ContainerLinksHeader = styled.section`
  height: 15%;
  display: flex;
  gap: 1rem;
`
const NavLinksHeader = styled.a`
  color: ${primaryColor};
  position: relative;
  font-weight: 600;

  &:hover {
    color: ${secondColor};
    transition: all 0.8s;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: ${secondColor};
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.8s;
  }

  &:hover::after {
    color: ${secondColor};
    transform: scaleX(1);
    transform-origin: left;
  }
`

export default function Header() {
  return (
    <ContainerNavAndImgs>
      <UlNavigation>
        <li>
          <NavLinksHeader href="#sobre">SOBRE</NavLinksHeader>
        </li>
        <li>
          <NavLinksHeader href="#habilidade">HABILIDADES</NavLinksHeader>
        </li>
        <li>
          <NavLinksHeader href="#projetos">PROJETOS</NavLinksHeader>
        </li>
        <li>
          <NavLinksHeader href="#contato">CONTATO</NavLinksHeader>
        </li>
      </UlNavigation>
      <ContainerLinksHeader>
        <LinkContato href="https://github.com/GabrielBerg4mini" target="_blank">
          <Github />
        </LinkContato>
        <LinkContato
          href="https://www.linkedin.com/in/gabriel-bergamini-1424b323b/"
          target="_blank"
        >
          {" "}
          <Linkedin />
        </LinkContato>
      </ContainerLinksHeader>
    </ContainerNavAndImgs>
  )
}
