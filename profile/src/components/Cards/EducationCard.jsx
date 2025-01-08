import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 24px;
    padding: 16px 24px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.4s ease-in-out;

    /* Apply the custom gradient background */
    background: linear-gradient(135deg, rgba(255, 87, 34, 0.2) 10%, rgba(33, 150, 243, 0.3) 90%);
    background: -moz-linear-gradient(135deg, rgba(255, 87, 34, 0.2) 10%, rgba(33, 150, 243, 0.3) 90%);
    background: -webkit-linear-gradient(135deg, rgba(255, 87, 34, 0.2) 10%, rgba(33, 150, 243, 0.3) 90%);
    
    border: 1px solid #854CE6;

    &:hover {
        box-shadow: rgba(23, 92, 230, 0.25) 0px 10px 32px;
        transform: translateY(-8px);
        background: linear-gradient(135deg, rgba(255, 87, 34, 0.2) 10%, rgba(33, 150, 243, 0.5) 90%); /* Slightly more intense hover effect */
    }

    @media only screen and (max-width: 768px){
        padding: 14px;
        gap: 12px;
        width: 300px;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 14px;
`

const Image = styled.img`
    height: 55px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    }

    @media only screen and (max-width: 768px){
        height: 45px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Name = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    line-height: 1.3;
    @media only screen and (max-width: 768px){
        font-size: 16px;
    }
`

const Degree = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Date = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Grade = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade><b>Grade: </b>{education.grade}</Grade>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}

export default EducationCard;
