import React, { useState } from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle';
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

// Define light and dark themes with improved colors
const lightTheme = {
    card_light: "#f7f9fc",
    primary: "#3498db", // Blue
    secondary: "#2ecc71", // Green
    text_primary: "#2d3436",
    text_secondary: "#7f8c8d",
    white: "#ffffff",
    toggleBackground: "#ecf0f1",
    buttonHover: "#2980b9"
};

const darkTheme = {
    card_light: "#2d3436", // Dark Background
    primary: "#00D2FF", // Light Blue
    secondary: "#00C9A7", // Light Green
    text_primary: "#ecf0f1", // Light Text
    text_secondary: "#95a5a6", // Grayish Text
    white: "#ffffff",
    toggleBackground: "#34495e",
    buttonHover: "#2980b9"
};

// Global styles for transitions between themes
const GlobalStyle = createGlobalStyle`
  body {
    transition: all 0.5s ease;
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.card_light};
  }
`;

// Styled button for toggling the theme
const ThemeToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.toggleBackground};
  color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 50%;
  padding: 12px;
  cursor: pointer;
  font-size: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
    transform: scale(1.1);
  }
`;

const HeroSection = () => {
    const [theme, setTheme] = useState(lightTheme);

    // Toggle the theme between light and dark
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div id="about">
                <HeroContainer>
                    <HeroBg>
                        <HeroBgAnimation />
                    </HeroBg>
                    <HeroInnerContainer >
                        <HeroLeftContainer id="Left">
                            <Title>Hi, I am <br /> {Bio.name}</Title>
                            <TextLoop>
                                I am a
                                <Span>
                                    <Typewriter
                                        options={{
                                            strings: Bio.roles,
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Span>
                            </TextLoop>
                            <SubTitle>{Bio.description}</SubTitle>
                            <ResumeButton href={Bio.resume} target="display">Check Resume</ResumeButton>
                        </HeroLeftContainer>

                        <HeroRightContainer id="Right">
                            <Img src={HeroImg} alt="hero-image" />
                        </HeroRightContainer>
                    </HeroInnerContainer>
                </HeroContainer>

                {/* Theme Toggle Button */}
                <ThemeToggleButton onClick={toggleTheme}>
                    {theme === lightTheme ? "🌙" : "🌞"}
                </ThemeToggleButton>
            </div>
        </ThemeProvider>
    );
}

export default HeroSection;
