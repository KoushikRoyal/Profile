import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    background: linear-gradient(135deg, rgba(34, 193, 195, 0.1) 10%, rgba(253, 187, 45, 0.2) 90%); /* Gradient background */
    border-radius: 12px;
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
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: black; /* Changed to black */
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.15); /* Optional text-shadow for better readability */
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: black; /* Changed to black */
    opacity: 0.8; /* Slight opacity for subtle effect */
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;

const index = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((education, index) => (
                            <TimelineItem key={index}>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== education.length && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default index;
