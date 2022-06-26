import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

const IconImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
`;

const Icon = () => {
    return <a href='https://jbhifi.com.au' target='_blank' rel="noreferrer">
        <IconImage src="professional-pages/jbhifi.png" alt='icon' />
    </a>
}


export default function Jbhifi() {
    const education =
    {
        date: '2017 - 2021',
        title: 'Junior Software Developer',
        title2: 'Software Developer',
        organisation: 'JB HiFi',
        location: 'Melbourne, Australia',
    };

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#FEEB10', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  #FEEB10' }}
            date={education.date}
            iconStyle={{ background: '#FEEB10', color: 'black' }}
            icon={<Icon />}
        >
            <h3 className="vertical-timeline-element-title">{education.title}</h3>
            <h3 className="vertical-timeline-element-title">{education.title2}</h3>
            <h4 className="vertical-timeline-element-subtitle">{education.organisation}</h4>
            <h4 className="vertical-timeline-element-subtitle">{education.location}</h4>
        </VerticalTimelineElement>
    )
}