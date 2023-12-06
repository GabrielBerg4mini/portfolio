import "../Global.css"
import { useState } from "react"
import { useSpring, animated } from "react-spring"
import { Menu, X } from "lucide-react"
import styled from "styled-components"

const ContainerHeaderNav = styled.section`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContainerNav = styled.section`
  padding-left: 1rem;

  svg {
    cursor: pointer;
    transition: all 1s;
    &:hover {
      color: #242323;
    }
  }
`

const ContainerBackgroundNav = styled(animated.section)`
  position: absolute;

  margin-left: -1rem;
  background: #6464fa97;
  backdrop-filter: blur(12px);
  width: 100%;
  top: 3.5rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const NavLinks = styled.nav`
  font-size: 2rem;
  text-align: center;
`
const Li = styled.li`
  margin-top: 1.2rem;
`
const BorderLink = styled.a`
  position: relative;
  color: rgb(255, 255, 255);
  text-decoration: none;
  line-height: 4rem;

  font-weight: 600;
  &:hover {
    transition: all 0.8s;
    color: #28034b;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background: #28034b;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.5s;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`
const ButtonLinkNav = styled.a`
  padding: 0.5rem 2rem;

  border-radius: 1rem;
  margin-top: 1rem;

  transition: all 1s;
  color: white;
  font-weight: 600;
  background: #28034b;

  &:hover {
    transition: all 0.8s;
    border: 1px solid #fff;
    background: transparent;
    color: #fff;
  }
`
const Header = () => {
  const [navVisible, setNavVisible] = useState(false)

  const navAnimation = useSpring({
    display: navVisible ? "flex" : "none",
    opacity: navVisible ? 1 : 0,
    transform: navVisible ? "translateY(0)" : "translateY(-10px)",
  })

  function toggleNav() {
    setNavVisible(!navVisible)
  }

  return (
    <ContainerHeaderNav>
      <ContainerNav>
        <section onClick={toggleNav}>
          {navVisible ? (
            <span>
              <X />
            </span>
          ) : (
            <Menu />
          )}
        </section>
        <ContainerBackgroundNav style={navAnimation}>
          <NavLinks>
            <h2>Bem vindo ao Meu Portfólio 🚀 </h2>
            <ul>
              <li>
                {" "}
                <BorderLink href="">Habilidades</BorderLink>{" "}
              </li>
              <li>
                {" "}
                <BorderLink href="">Projetos</BorderLink>{" "}
              </li>
              <Li>
                {" "}
                <ButtonLinkNav href="mailto:gabrielbergaminioficial@gmail.com">
                  Contato
                </ButtonLinkNav>{" "}
              </Li>
            </ul>
          </NavLinks>
        </ContainerBackgroundNav>
      </ContainerNav>

      <section>
        <a href="#">
          <img src="" alt="Logo" />
        </a>
      </section>
    </ContainerHeaderNav>
  )
}

export default Header
