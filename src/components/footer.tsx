import { Github, Linkedin, Mail } from "lucide-react"
import styled from "styled-components"

const Section = styled.section`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  h5 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  @media (max-width: 725px) {
    h5 {
      font-size: 1.2rem;
    }
  }
`
const Article = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.8s;
    &:hover {
      transform: scale(1.02);
    }
  }
  @media (max-width: 725px) {
    gap: 1rem;
    flex-wrap: wrap;

    margin: 0 auto;
    a {
      font-size: 0.8rem;
    }
    img {
      width: 1rem;
    }
  }
`
const Hr = styled.hr`
  margin: 1rem 0;
`

const FooterContainer = () => {
  return (
    <Section>
      <h5>Entre em contato comigo</h5>
      <Article>
        <a href="https://github.com/GabrielBerg4mini" target="_blank">
          {" "}
          <Github />
          <span>GitHub</span> @gabrielberg4mini
        </a>

        <a
          href="https://www.linkedin.com/in/gabriel-bergamini-1424b323b/"
          target="_blank"
        >
          <Linkedin />
          <span>LinkedIn</span> @gabrielbergamini
        </a>

        <a href="mailto:gabrielbergaminioficial@gmail.com">
          <Mail />
          <span>E-mail</span> gabrielbergaminioficial@gmail.com
        </a>
      </Article>
      <Hr />
      <article>
        <p>Gabriel Bergamini© All Rights Reserved</p>
      </article>
    </Section>
  )
}

export default FooterContainer
