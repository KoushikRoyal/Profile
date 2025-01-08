import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, rgba(34, 193, 195, 0.2), rgba(253, 187, 45, 0.2)); /* Gradient background */
  box-shadow: rgba(0, 0, 0, 0.1) 0px -4px 24px; /* Added shadow for more depth */
  position: relative;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase; /* Added text-transform for a bolder look */
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease-in-out, transform 0.3s ease; /* Added transform effect */
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1); /* Hover effect */
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.3s ease-in-out, transform 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.2); /* Social media icons hover effect */
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Koushik Akula</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          {/* Add more social media icons here */}
        </SocialMediaIcons>
        <Copyright>
          &copy; 2024 Koushik. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
