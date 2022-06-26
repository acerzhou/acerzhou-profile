import { Page } from './App';
import styled from 'styled-components';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Bachelor from './experience/Bachelor';
import Master from './experience/Master';
import Jbhifi from './experience/Jbhifi';
import NinetyNineDesigns from './experience/99Designs';
import Thoughtworks from './experience/Thoughtworks';
import { BsArrowLeft } from 'react-icons/bs';

const Wrapper = styled.div`
    position: relative;
    padding: 10px;
`

const ReturnButton = styled.button`
    position: absolute;
    left: 20px;
    top: 20px;
    background: white;
    border: none;
    hight: 40px;
    z-index: 10;
`;

interface Props {
    setPage: (page: Page) => void;
}

export default function ProfessionalPage({ setPage }: Props) {
    return <Wrapper>
        <ReturnButton onClick={() => setPage('home')}>
            <BsArrowLeft />
        </ReturnButton>
        <VerticalTimeline
            lineColor={'black'}
        >
            <Bachelor />
            <Master />
            <Jbhifi />
            <NinetyNineDesigns />
            <Thoughtworks />
        </VerticalTimeline>
    </Wrapper>
}