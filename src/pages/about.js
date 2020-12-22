import styled from 'styled-components';
import React from 'react';
import media from 'styled-media-query';
import Layout from '../components/Layout';
import Skill from '../components/Skill';
import SEO from '../components/seo';
import personal from '../utils/personal';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('large')`
    flex-direction: column;
    padding: 5rem 1.5rem;
    overflow: auto;
    height: auto;
  `}
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.brightOrange};
  font-size: 55px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const AboutMeWrapper = styled.div`
  max-width: 40%;
  text-align: justify;

  ${media.lessThan('large')`
    max-width: 100%;
  `}
`;

const Description = styled.p`
  color: white;
  margin-top: 15px;
  font-weight: 500;
  line-height: 1.5;
`;

const SkillWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    width: 70%;
    margin: 2rem 0;
  `}
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.orange};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.brightOrange};
  }
`;

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre mim" />
    <Wrapper>
      <AboutMeWrapper>
        <Title>Sobre Mim</Title>
        <Description>
          Meu nome é Talita Ribeiro, tenho 30 anos, sou natural de Itapajé (Ceará)
          e atualmente moro em São Paulo (SP) com meu esposo Fernando. Em 2018 me
          formei em Secretariado pela FECAP. Depois de trabalhar na área administrativa e
          ver o quanto a carreira de secretária executiva pode ser desvalorizada decidi
          explorar o universo de programação e com a ajuda das meninas do PrograMaria
          iniciei meus primeiros passos nesse universo tão amplo e desafiador.
          Esse curso foi fundamental para me dar um norte de aprendizado
          na área de programação e desde então venho me capacitando com cursos e
          me preparando para dar início a minha jornada como desenvolvedora.
          <br />
          <br />
          Se quiser conversar comigo, tirar dúvidas ou pedir alguma ajuda é só me mandar um e-mail
          em{' '}
          <ExternalLink aria-label="e-mail" href="mailto:talitaribeiro@outlook.com.br">
            talitaribeiro@outlook.com.br
          </ExternalLink>
        </Description>
      </AboutMeWrapper>
      <SkillWrapper>
        {personal.softSkills.map((skill) => (
          <Skill key={skill.name} ability={skill} />
        ))}
      </SkillWrapper>
    </Wrapper>
  </Layout>
);

export default AboutPage;
