import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

const IconImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
`;

const Icon = () => {
    return <a href='https://thoughtworks.com' target='_blank' rel="noreferrer">
        <IconImage src="professional-pages/thoughtworks.jpg" alt='icon' />
    </a>
}


export default function Thoughtworks() {
    const education =
    {
        date: '2022 - now',
        title: 'Senior Consultant - Developer',
        organisation: 'Thoughtworks',
        location: 'Melbourne, Australia',
    };

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#003C4F', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #003C4F' }}
            date={education.date}
            iconStyle={{ background: '#003C4F', color: 'black' }}
            icon={<Icon />}
        >
            <h3 className="vertical-timeline-element-title">{education.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{education.organisation}</h4>
            <h4 className="vertical-timeline-element-subtitle">{education.location}</h4>
        </VerticalTimelineElement>
    )
}