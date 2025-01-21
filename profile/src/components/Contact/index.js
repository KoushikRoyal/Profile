import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgba(72, 61, 139, 0.2), rgba(255, 87, 34, 0.3)); /* Updated gradient */
  padding: 60px 0px;
  min-height: 100vh;
  @media (max-width: 960px) {
    padding: 40px 10px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 800px;  /* Reduced max-width */
  padding: 30px 20px;  /* Reduced padding */
  gap: 15px;
  background: rgba(255, 255, 255, 0.9); /* Semi-transparent white background for contrast */
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 24px;
`;

const Title = styled.div`
  font-size: 36px;  /* Reduced font size */
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Desc = styled.div`
  font-size: 16px;  /* Reduced font size */
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;  /* Reduced max-width */
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 24px;  /* Reduced padding */
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 20px;
  gap: 15px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 32px;
  }
`;

const ContactTitle = styled.div`
  font-size: 22px;  /* Reduced font size */
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 16px;  /* Reduced font size */
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 10px 16px;  /* Reduced padding */
  transition: all 0.3s ease;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 16px;  /* Reduced font size */
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 10px 16px;  /* Reduced padding */
  resize: none;
  transition: all 0.3s ease;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(225deg, rgba(255, 87, 34, 1) 0%, rgba(33, 150, 243, 1) 100%);
  padding: 12px 16px;  /* Reduced padding */
  margin-top: 12px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;  /* Reduced font size */
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  }
`;

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_n81x4ig', 'template_snbow68', form.current, 'MunkRlTLiCWRzv9t7')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
