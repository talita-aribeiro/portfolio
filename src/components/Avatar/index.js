import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Image, Email } from './styles';

const AVATAR_QUERY = graphql`
  query {
    avatarImage: file(relativePath: { eq: "avatar.jpeg" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Avatar = () => {
  const { avatarImage } = useStaticQuery(AVATAR_QUERY);

  return (
    <Email aria-label="Linkedin" target="__blank" href="https://www.linkedin.com/in/talita-aribeiro/">
      <Image fixed={avatarImage.childImageSharp.fixed} />
    </Email>
  );
};

export default Avatar;
