import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

const IconImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
`;

const Icon = () => {
    return <a href='https://99designs.com' target='_blank' rel="noreferrer">
        <IconImage src="professional-pages/99designs.png" alt='icon' />
    </a>
}


export default function NinetyNineDesigns() {
    const education =
    {
        date: '2021 - 2022',
        title: 'Software Developer',
        organisation: '99Designs',
        location: 'Melbourne, Australia',
    };

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#FF6052', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #FF6052' }}
            date={education.date}
            iconStyle={{ background: '#FF6052', color: 'black' }}
            icon={<Icon />}
        >
            <h3 className="vertical-timeline-element-title">{education.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{education.organisation}</h4>
            <h4 className="vertical-timeline-element-subtitle">{education.location}</h4>
        </VerticalTimelineElement>
    )
}