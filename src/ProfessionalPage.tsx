import React from 'react';
import { Page } from './App';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    padding: 10px;
`

const ReturnButton = styled.button`
    position: absolute;
    left: 20px;
    top: 20px;
`;

interface Props {
    setPage: (page: Page) => void;
}

export default function ProfessionalPage({ setPage }: Props) {
    return <Wrapper>
        <ReturnButton onClick={() => setPage('home')}>return</ReturnButton>
        <div>Education</div>
        <div>
            <p>Changchun University of Science and Technology</p>
            <p>Bachelor of Network Engineering, Information Technology</p>
            <p>Graduated in 2013</p>
        </div>
        <div>
            <p>Monash University</p>
            <p>Master of Information Technology & Master of Business Information System</p>
            <p>Graduated in 2015</p>
        </div>
        <div>Career</div>

        <div>Projects</div>
    </Wrapper>
}