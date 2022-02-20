import React, { useState } from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { FaBloggerB, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Page } from './App';

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
`;

const LanguageButton = styled.button`
    position: absolute;
    bottom: 10px;
    right: 15px;
    height: 30px;
    width: 30px;
    border: none;
    background: white;
`;

const content = {
    chinese: {
        language: 'EN',
        name: '周虹伋',
        position: '全栈开发工程师',
        location: '澳大利亚，墨尔本',
    },
    english: {
        language: '中',
        name: 'ACER ZHOU',
        position: 'Full Stack Software Engineer',
        location: 'Melbourne, Australia',
    },
}

interface Props {
    setPage: (page: Page) => void;
}

export default function HomePage({ setPage }: Props) {
    const [language, setLanguage] = useState<'english' | 'chinese'>('english');
    function handleLanguageButtonClick() {
        if (language === 'english') {
            setLanguage('chinese')
        } else {
            setLanguage('english')
        }
    }
    return (<Wrapper>

        <ContentWrapper>
            <h1>{content[language].name}</h1>
            <h3 onClick={() => setPage('professional')}>{content[language].position}</h3>
            <h3>{content[language].location}</h3>
            <IconWrapper>
                <Icon href="https://github.com/AcerZhou/" target="_blank"><FaGithub /></Icon>
                <Icon href="https://www.linkedin.com/in/acer-zhou/" target="_blank"><FaLinkedin /></Icon>
                <Icon href="https://acerzhou.github.io/Blog" target="_blank"><FaBloggerB /></Icon>
                <Icon href="mailto:acerzhou.work@gmail.com" target="_blank"><MdEmail /></Icon>
            </IconWrapper>

        </ContentWrapper>
        <LanguageButton onClick={handleLanguageButtonClick}>{content[language].language}</LanguageButton>

    </Wrapper>)
}