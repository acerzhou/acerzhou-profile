import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

const IconImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
`;

const Icon = () => {
    return <IconImage src="professional-pages/monash.png" alt='icon' />
}


export default function Master() {
    const education =
    {
        date: '2013 - 2015',
        title: 'Master of Information Technology',
        title2: 'Master of Business Information System',
        organisation: 'Monash University',
        location: 'Melbourne, Australia',
    };

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#00599D', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #00599D' }}
            date={education.date}
            iconStyle={{ background: 'white', color: 'black' }}
            icon={<Icon />}
        >
            <h3 className="vertical-timeline-element-title">{education.title}</h3>
            <h3 className="vertical-timeline-element-title">{education.title2}</h3>
            <h4 className="vertical-timeline-element-subtitle">{education.organisation}</h4>
            <h4 className="vertical-timeline-element-subtitle">{education.location}</h4>
        </VerticalTimelineElement>
    )
}