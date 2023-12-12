import "../Global.css"
import styled, { css } from "styled-components"
import sportsBrasil from "../assets/project-sports-brasil.png"
import js from "../assets/svgs/icon-javascript.svg"
import cssIcon from "../assets/svgs/icon-css.svg"
import htmlIcon from "../assets/svgs/icon-html.svg"
import git from "../assets/svgs/icon-git.svg"

const ContainerProject = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 5rem;
  background: red;
`

const SectionProject = styled.section`
  width: 100%;
  background: blue;
  display: flex;
  justify-content: space-between;
`
const ContainerInformation = styled.article`
  width: 49%;
`
const ContainerImageProject = styled.article`
  padding: 0.5rem;
  width: 49%;
`

const ContainerIcons = styled.article`
  img {
    width: 2rem;
  }
`
const ProjectPage = () => {
  return (
    <ContainerProject id="projetos">
      <SectionProject>
        <ContainerInformation>
          <h3>Sports Brasil</h3>
          <p>
            Projeto Desenvolvido em Conjunto com mais 2 devs, para aprendermos
            melhor sobre Git e também melhorar o nosso trabalho em equipe. Atuei
            como <strong>lider</strong> do grupo, repassando cada função para os
            colegas de equipe e prazo de entrega também. Aprendi muito sobre Git
            e também sobre <strong>JavaScript</strong> e suas funções, sendo um
            projeto incrível e que me trouxe muito conhecimentos. As partes que
            fiquei responsável, foi a primeira <strong>página</strong> que
            aparece e a parte de <strong>Notícias.</strong>
          </p>
          <ContainerIcons>
            <img src={js} alt="Icon-Js" />
            <img src={cssIcon} alt="Icon-Css" />
            <img src={htmlIcon} alt="Icon-html" />
            <img src={git} alt="Icon-Git" />
          </ContainerIcons>
          <article>
            <a href="#">Visitar </a>
            <a href="#">repositório</a>
          </article>
        </ContainerInformation>
        <ContainerImageProject>
          <img src={sportsBrasil} alt="Imagem Projeto" />
        </ContainerImageProject>
      </SectionProject>
    </ContainerProject>
  )
}

export default ProjectPage
