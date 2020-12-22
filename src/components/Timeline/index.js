import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaStar, FaGraduationCap } from 'react-icons/fa';
import { BsCollectionPlay, BsCodeSlash } from 'react-icons/bs';
import { GrUserFemale } from 'react-icons/gr';
import { BiBookOpen } from 'react-icons/bi';
import media from 'styled-media-query';
import { MdWork } from 'react-icons/md';
import styled from 'styled-components';
import 'react-vertical-timeline-component/style.min.css';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: auto;

  ${media.lessThan('large')`
    padding: 3rem 0 0 0;

  `}
  .vertical-timeline-element-date {
    color: white;

    ${media.lessThan('large')`
      color: black;
      margin-top: 15px;
    `}
  }
`;

const Title = styled.h3`
  font-weight: bold;
  margin: 7px 0;
  color: ${({ color }) => color || 'white'};
  font-size: 20px;
`;

const styles = {
  content: { background: '#f69723', color: 'white' },
  border: { borderTop: '5px solid #f69723' },
  arrow: { borderRight: '7px solid #f69723' }
};

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.orange};
  text-decoration: none;
`;

const Timeline = () => (
  <Wrapper>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={styles.content}
        contentArrowStyle={styles.arrow}
        date="atualmente"
        iconStyle={styles.content}
        icon={<BsCodeSlash />}
      >
        <Title>Bootcamp</Title>
        <h4>Digital Innovation One - São Paulo</h4>
        <p>
          Achei que sabia programar, foi aí que eu descobri que eu ia tomar muito
          tapa na cara nessa vida.
          Comecei meus estudos na Digital Innovation One, onde toda minha base
          de conhecimento está sendo construída, desde a arquitetura de software até
          a publicação de um site moderno e performático.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<GrUserFemale />}
      >
        <Title color="black">Eu programando</Title>
        <h4 className="vertical-timeline-element-subtitle">Programaria, São Paulo - SP</h4>
        <p>
          Durante anos trabalhando na área administrativa, tive oportunidade de trabalhar em
          pequenas, médias e grandes empresas. Porém com a crise e a vontade de mudar aproveitei a
          oportunidade que as mulheres da comunidade do Progra{'{m}'}aria
          para dar o start na minha migração de carreira.
          Com direito a bolsa integral desenvolvi meus conhecimentos nas linguagens HTML, CSS e
          JavaScript  e o resultado foi este:
          <br />
          <ExternalLink
            aria-label="meu primeiro site"
            target="__blank"
            href="https://siteada.talitaribeiro.repl.co/"
          >
            clicando aqui
          </ExternalLink>
          .
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018-2019"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<MdWork />}
      >
        <Title color="black">Secretariando</Title>
        <h4 className="vertical-timeline-element-subtitle">Rede Dor São Luiz – Unidade Jabaquara</h4>
        <p>
          Era a principal responsável pelo gerenciamento das agendas dos diretores.
          Nesse período desenvolvi minhas principais competências como líder de departamento,
          estando atenta aos custos e serviços prestados pelos demais departamentos do hospital.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015 - 2016"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<BiBookOpen />}
      >
        <Title color="black">Estágio</Title>
        <h4 className="vertical-timeline-element-subtitle">Ribeiro Abrão e Matheus Advogados</h4>
        <p>
          Dei início a minha carreira no secretariado. Ao longo desse período
          tive a oportunidade de aplicar na prática todo aprendizado
          adquirido ao longo do curso de secretariado.
        </p>
        <br />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2015 - 2017"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<FaGraduationCap />}
      >
        <Title color="black">A Faculdade</Title>
        <h4 className="vertical-timeline-element-subtitle">Secretariado Executivo - FECAP</h4>
        <p>
          Após alguns meses de convívio com profissionais do secretariado,
          decidi dar início a minha formação acadêmica
          em busca do meu crescimento profissional.
        </p>
        <br />

      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2014"
        contentStyle={styles.border}
        iconStyle={styles.content}
        icon={<BsCollectionPlay />}
      >
        <Title color="black">Itau BBA</Title>

        <h4 className="vertical-timeline-element-subtitle">Recepcionista, São Paulo</h4>
        <p>
          Minha função era, entre outras, era preparar e acompanhar eventos políticos e
          de negócios do banco, sempre com excelência e discrição, juntamente com minha
          antiga equipe, era responsável por
          recepcionar clientes internos e externos, brasileiros e estrangeiros.
          Além de auxiliar diretores do banco, juntamente com suas secretárias.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<FaStar />}
      />
    </VerticalTimeline>
  </Wrapper>
);

export default Timeline;
