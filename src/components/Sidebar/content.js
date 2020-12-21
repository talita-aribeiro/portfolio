import React from 'react';
import { FiGithub } from 'react-icons/fi';
import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { FaLinkedinIn, FaRegUser } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { BiCalendarHeart } from 'react-icons/bi';
import { main } from '../../styles/themes';


const Default = `
  &:hover {
    color: ${main.orange};
    cursor: pointer;
  }
`;

const Home = styled(AiOutlineHome)`
  ${Default}
`;

const About = styled(FaRegUser)`
  ${Default}
`;

const Skills = styled(BsCodeSlash)`
  ${Default}
`;

const Achievements = styled(BiCalendarHeart)`
  ${Default}
`;


const Linkedin = styled(FaLinkedinIn)`
  ${Default}
`;
const Github = styled(FiGithub)`
  ${Default}
`;

// const Devto = styled(FaDev)`
//   ${Default}
// `;

export const links = [
  {
    id: 'Home',
    icon: <Home size="25" />,
    url: '/'
  },
  {
    id: 'About',
    icon: <About size="20" />,
    url: '/about'
  },
  {
    id: 'Skills',
    icon: <Skills size="25" />,
    url: '/skills'
  },
  {
    id: 'Achievements',
    icon: <Achievements size="25" />,
    url: '/achievements'
  }
];

export const networks = [
  {
    id: 'Linkedin',
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/in/talita-aribeiro/'
  },
  {
    id: 'Github',
    icon: <Github />,
    url: 'https://github.com/talita-aribeiro'
  }
];
