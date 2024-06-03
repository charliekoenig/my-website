// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';

const Section = styled.section`
  padding: 100px 20px;
  min-height: 100vh;
`;

const HomeSection = styled(Section)`
  background-color: #f0f0f0;
`;

const ProjectsSection = styled(Section)`
  background-color: #e0e0e0;
`;

const ContactSection = styled(Section)`
  background-color: #d0d0d0;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HomeSection id="home">
        <h1>Home</h1>
        <p>Welcome to my website!</p>
      </HomeSection>
      <ProjectsSection id="projects">
        <h1>Projects</h1>
        <p>Here are some of my projects.</p>
      </ProjectsSection>
      <ContactSection id="contact">
        <h1>Contact</h1>
        <p>Get in touch with me!</p>
      </ContactSection>
    </>
  );
};

export default App;
