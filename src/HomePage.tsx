import React, { useState } from 'react';
import styled from 'styled-components';
import { MdEmail } from 'react-icons/md';
import { FaBloggerB, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Page } from './App';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 2fr 1fr 3fr;
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

interface ILanguageButton {
    isButtonChinese: boolean
}

const LanguageButton = styled.button<ILanguageButton>`
    position: absolute;
    bottom: 10px;
    right: 15px;
    height: 30px;
    width: 30px;
    border: none;
    background: white;
    border: 1px solid black;
    border-radius: ${(props) => props.isButtonChinese ? '0' : '50%'};
    &:hover  {
        border: 2px solid orange;
    }
`;

const Position = styled.h3`
    &:hover  {
        color: orange;
        cursor: pointer;
    }
`;

const LocationLink = styled.a`
    color: black;
    text-decoration: none; 
    &:hover  {
        color: orange;
        cursor: pointer;
    }
`;
const content = {
    chinese: {
        language: 'EN',
        name: '周 虹 伋',
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

const Line = styled.div`
    position: absolute;
    left: 36%;
    width: 3px;
    height: 100%;
    background: orange;
`;

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

        <Line />
        <ContentWrapper>
            <h1>{content[language].name}</h1>
            <Position onClick={() => setPage('professional')}>{content[language].position}</Position>
            <LocationLink href='https://goo.gl/maps/LWY32BP7dxwmWN949' target='_blank' rel="noreferrer">
                <h3>{content[language].location}</h3>
            </LocationLink>
            <IconWrapper>
                <Icon href="https://github.com/AcerZhou/" target="_blank"><FaGithub /></Icon>
                <Icon href="https://www.linkedin.com/in/acer-zhou/" target="_blank"><FaLinkedin /></Icon>
                <Icon href="https://acerzhou.github.io/Blog" target="_blank"><FaBloggerB /></Icon>
                <Icon href="mailto:acerzhou.work@gmail.com" target="_blank"><MdEmail /></Icon>
            </IconWrapper>

        </ContentWrapper>
        <LanguageButton isButtonChinese={language === 'chinese'} onClick={handleLanguageButtonClick}>{content[language].language}</LanguageButton>

    </Wrapper>)
}