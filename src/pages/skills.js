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
    width: 100%;
    margin: 2rem 0;
  `}
`;

const SkillsPage = () => (
  <Layout>
    <SEO title="Sobre mim" />
    <Wrapper>
      <AboutMeWrapper>
        <Title> Tata Tech</Title>
        <Description>
          Depois de uma breve carreira como secretaria executiva, percebi que
          não estava feliz com a escolha profissional que fiz alguns anos atrás.
          Então decidi mudar! Tal qual uma camaleoa me permiti transformar e entrei de cabeça
          em uma área completamente diferente a que estava habituada.
          Hoje dou inicio a uma nova etapa. Meus primeiros passos nesse mundo do desenvolvimento.
          Parto para um novo rumo, com mais segurança e pés no chão, muito disso graças as mulheres
          da Progra{'{M}'}aria e WoMakersCode que nesse ano de 2020 fizeram eventos
          incríveis para engajar mulheres que, assim como eu, estavam desmotivadas
          em suas carreiras e sem perspectiva de melhora.
          <br />
          Sinto que sou capaz e que tenho muito a aprender e desenvolver,
          não apenas como desenvolvedora, mas como alguém que pode retornar
          para a sociedade o que recebi através das comunidades que me receberam.
          <br />
          Então bora Tata Tech 2021.
        </Description>
      </AboutMeWrapper>
      <SkillWrapper>
        {personal.skills.map((skill) => (
          <Skill key={skill.name} ability={skill} />
        ))}
      </SkillWrapper>
    </Wrapper>
  </Layout>
);

export default SkillsPage;
