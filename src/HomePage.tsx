import React from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { FaBloggerB, FaGithub, FaLinkedin } from 'react-icons/fa';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 3fr;
    height: 100vh;
    width: 100%;
`;

const ContentWrapper = styled.div`
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const IconWrapper = styled.div`
    display: flex;
    gap: 20px;
`;

const Icon = styled.a`
    font-size: 20px; 
    text-decoration: none;
    color: black;
`

export default function HomePage() {
    return (<Wrapper>
        <ContentWrapper>
            <h1>ACER ZHOU</h1>
            <h3>Full Stack Software Engineer</h3>
            <h3>Melbourne, Australia</h3>
            <IconWrapper>
                <Icon href="https://github.com/AcerZhou/"><FaGithub /></Icon>
                <Icon href="https://www.linkedin.com/in/acer-zhou/"><FaLinkedin /></Icon>
                <Icon href="https://acerzhou.github.io/Blog"><FaBloggerB /></Icon>
                <Icon href="mailto:acerzhou.work@gmail.com"><MdEmail /></Icon>
            </IconWrapper>

        </ContentWrapper>

    </Wrapper>)
}