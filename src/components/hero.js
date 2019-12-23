import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 60% center;
  background-size: cover;
  min-height: 50vh;
  + * {
    margin-top: 0;
  }
`;
const TextBox = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
    color: #ddd;
    align-self: center;
  }
  p,
  a {
    color: #ddd;
    margin-top: 0;
  }
  a {
    margin-top: 0.25rem;
  }
`;
const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "moodywalk.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid}>
      <TextBox>
        <h1>Blog Boilerplate</h1>
      </TextBox>
    </ImageBackground>
  );
};
export default Hero;
