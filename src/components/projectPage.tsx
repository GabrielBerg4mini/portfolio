import "../Global.css"
// src/components/Projects.tsx

import React, { useState, useEffect } from "react"
import styled from "styled-components"
import sportsBrasil from "../assets/project-sports-brasil.jpg"
import formulario from "../assets/project-formulario.jpg"
import rocketflix from "../assets/project-rocketflix.jpg"
import energySouls from "../assets/project-energy-souls.jpg"
import { buttonsStyleds, secondColor } from "./colors"
import Iconcss from "../assets/svgs/css-icon-project.svg"
import Iconhtml from "../assets/svgs/html-icon-project.svg"
import Iconjs from "../assets/svgs/javascript-icon-project.svg"
import Icongit from "../assets/svgs/git-icon-project.svg"
import Iconbootstrap from "../assets/svgs/bootstrap-icon-project.svg"
import { ArrowRight, Github } from "lucide-react"
interface Project {
  id: number
  title: string
  description: string
  iconsImgs: string[]
  websiteLink: string
  repositoryLink: string
  imageUrl: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Sports Brasil",
    description:
      "Projeto Desenvolvido em conjunto com mais 2 devs amigos meus, para aprimorarmos mais nosso conhecimento sobre versionamento usando Git. Atuei como líder do projeto, passando para ambos quais seriam a sua parte e o que deveriam fazer. Minha parte de desenvolvimento nesse projeto, foi a primeira página que aparece quando abre o site e a página inteira de Notícias.",
    iconsImgs: [`${Iconjs}`, `${Iconhtml}`, `${Iconcss}`, `${Icongit}`],
    websiteLink: "https://gabrielberg4mini.github.io/sports-brasil/",
    repositoryLink: "https://github.com/GabrielBerg4mini/sports-brasil",
    imageUrl: `${sportsBrasil}`,
  },
  {
    id: 2,
    title: "Rocketflix",
    description:
      "Projeto desenvolvido após o termino do curso Discorver da Rocketseat. Sendo um desafio de usar AJAX, e o consumo de uma API do The Movie. Esse desafio foi um tanto desafiador, mas consegui chegar ao resultado proposto e também aprendi muita coisa, principalmente a tratar erros com Throw e Cath. E lógico, a consumir uma API que até então eu não tinha realizado algo usando uma API.",
    iconsImgs: [`${Iconjs}`, `${Iconhtml}`, `${Iconcss}`, `${Icongit}`],
    websiteLink: "https://gabrielberg4mini.github.io/rocketflix/",
    repositoryLink: "https://github.com/GabrielBerg4mini/rocketflix",
    imageUrl: `${rocketflix}`,
  },
  {
    id: 3,
    title: "Energy Souls",
    description:
      "Esse projeto, foi uma tentativa de venda para uma empresa da minha cidade, com foco em energia solar. Infelizmente a venda não foi efetuada,porém, foi uns dos projetos que eu mais aprendi. Tanto as tecnologias quanto a me comportar sob a presença do cliente. Fiz desde do design até o final do projeto, adquiri conhecimentos sobre bootstrap e também algumas funcionalidades do JavaScript.",
    iconsImgs: [
      `${Iconjs}`,
      `${Iconhtml}`,
      `${Iconcss}`,
      `${Icongit}`,
      `${Iconbootstrap}`,
    ],
    websiteLink: "https://gabrielberg4mini.github.io/energy-souls/",
    repositoryLink: "https://github.com/GabrielBerg4mini/energy-souls",
    imageUrl: `${energySouls}`,
  },
  {
    id: 4,
    title: "Formulário",
    description:
      "Projeto desenvolvido em conjunto com um vídeo do youtube, para entender melhor a criação de formulários, usando animações incríveis para deixar mais atraente e também usando alguns recurso de javascript, que me ajudou bastante a melhorar o meu conhecimento sobre a linguagem.",
    iconsImgs: [`${Iconjs}`, `${Iconhtml}`, `${Iconcss}`, `${Icongit}`],
    websiteLink: "https://gabrielberg4mini.github.io/formulario/",
    repositoryLink: "https://github.com/GabrielBerg4mini/formulario",
    imageUrl: `${formulario}`,
  },
]

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding-top: 7rem;

  h3 {
    text-align: center;
    color: ${secondColor};
    font-size: 1.7rem;
    margin-bottom: 4rem;
  }
`
const ContainerCards = styled.article`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 10rem;
`
const ProjectCard = styled.article`
  display: flex;
  gap: 2rem;
  color: #181616;
  align-items: center;
  h4 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
    color: ${secondColor};
  }
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`

const ProjectImage = styled.section`
  width: 50%;

  overflow: hidden;
  border-radius: 0.2rem;

  img {
    transition: all 0.3s ease-in-out;
    object-fit: cover;
    &:hover {
      transform: scale(1.1);
      filter: brightness(60%);
    }
  }
`
const ProjectContent = styled.article`
  width: 50%;
  text-align: justify;
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0.5rem 0;
  }
`
const ContainerLinks = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
const Linksite = styled.a`
  ${buttonsStyleds}
  transition:  all .4s ease-in-out;
  &:hover {
    background: #4e4ec7;
    transition: all 0.4s ease-in-out;
    transform: scale(1.02);
  }
`
const Linkrepositorio = styled.a`
  ${buttonsStyleds}
  transition:  all .4s ease-in-out;
  &:hover {
    background: #4e4ec7;
    transition: all 0.4s ease-in-out;
    transform: scale(1.02);
  }
`

const ProjectPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  return (
    <Container id="projetos">
      <h3>Projetos</h3>
      <ContainerCards>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage>
              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.imageUrl} alt={project.title} />
              </a>
            </ProjectImage>
            <ProjectContent>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul>
                {project.iconsImgs.map((icon, index) => (
                  <li key={index}>
                    <img src={icon} alt="icons" />
                  </li>
                ))}
              </ul>{" "}
              <ContainerLinks>
                <Linksite
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  visitar <ArrowRight size={16} />
                </Linksite>

                <Linkrepositorio
                  href={project.repositoryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  repositório <Github size={16} />
                </Linkrepositorio>
              </ContainerLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ContainerCards>
    </Container>
  )
}

export default ProjectPage
