import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  background: linear-gradient(225deg, rgba(0, 201, 167, 0.4) 0%, rgba(0, 210, 255, 0.3) 100%);
  background: -moz-linear-gradient(225deg, rgba(0, 201, 167, 0.4) 0%, rgba(0, 210, 255, 0.3) 100%);
  background: -webkit-linear-gradient(225deg, rgba(0, 201, 167, 0.4) 0%, rgba(0, 210, 255, 0.3) 100%);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 24px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 48px;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;
  color: white; /* White text color */
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5); /* Adding text shadow for better contrast */
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  max-width: 600px;
  color: white; /* White text color */
  line-height: 1.6;
  margin-top: 16px;
  font-weight: 400;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3); /* Add subtle text shadow */
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 18px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const StyledTimelineDot = styled(TimelineDot)`
  background-color: #99c2ff !important;
  box-shadow: 0px 0px 10px rgba(153, 194, 255, 0.4);
  transition: all 0.3s ease;
  &:hover {
    background-color: #7faeff !important;
    transform: scale(1.2);
  }
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  background: #99c2ff !important;
`;

const CardWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 4px 24px;
  width: 100%;
  max-width: 900px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(255, 255, 255, 0.4) 0px 6px 30px;
  }
`;

const index = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc><h4>
          My work experience as a software engineer, contributing to various projects at different companies.</h4>
        </Desc>
        <TimelineSection>
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <StyledTimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && <StyledTimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <CardWrapper>
                    <ExperienceCard experience={experience} />
                  </CardWrapper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default index;
