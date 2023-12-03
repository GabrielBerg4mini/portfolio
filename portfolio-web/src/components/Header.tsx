import { useState } from "react"
import { useSpring, animated } from "react-spring"
import { Menu } from "lucide-react"
import styled from "styled-components"
import { secondColor } from "./colors"

const ContainerHeaderNav = styled.section`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContainerNav = styled.section`
  position: relative;

  svg {
    cursor: pointer;
    &:hover {
      color: ${secondColor};
    }
  }
`

const NavLinks = styled(animated.nav)`
  position: absolute;
  top: 2.5rem;

  padding: 10px;
  border: 1px solid #ccc;
  width: 150px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`
const Li = styled.li`
  width: 100%;
`

const BorderLink = styled.a`
  position: relative;
  color: rgb(255, 255, 255);
  text-decoration: none;
  line-height: 2rem;
  width: 100%;

  &:after {
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
    transition: transform 0.5s;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

const Header = () => {
  const [navVisible, setNavVisible] = useState(false)

  const navAnimation = useSpring({
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
          {" "}
          <Menu />
        </section>

        <NavLinks style={navAnimation}>
          <ul>
            <Li>
              {" "}
              <BorderLink href="">Habilidades</BorderLink>{" "}
            </Li>
            <Li>
              {" "}
              <BorderLink href="">Projetos</BorderLink>{" "}
            </Li>
            <Li>
              {" "}
              <BorderLink href="">Contato</BorderLink>{" "}
            </Li>
          </ul>
        </NavLinks>
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
