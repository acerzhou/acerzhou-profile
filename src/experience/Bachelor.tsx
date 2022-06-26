import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

const IconImage = styled.img`
    height: 100%;
    width: 100%;
`;

const Icon = () => {
    return <a href='https://sie.cust.edu.cn/' target='_blank' rel="noreferrer">
        <IconImage src="professional-pages/changchun_university_of_since_and_technology.jpg" alt='icon' />
    </a>
}


export default function Bachelor() {
    const education =
    {
        date: '2009 - 2013',
        title: 'Bachelor of Network Engineering',
        organisation: 'Changchun University of Science and Technology',
        location: 'Changchun, China',
    };

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#018BCB', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #018BCB' }}
            date={education.date}
            iconStyle={{ background: '#018BCB', color: 'black' }}
            icon={<Icon />}
        >
            <h3 className="vertical-timeline-element-title">{education.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{education.organisation}</h4>
            <h4 className="vertical-timeline-element-subtitle">{education.location}</h4>
        </VerticalTimelineElement>
    )
}