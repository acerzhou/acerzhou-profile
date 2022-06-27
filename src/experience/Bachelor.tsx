import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from '../common/Icon';

export default function Bachelor() {
    const education =
    {
        date: '2009 - 2013',
        title: 'Bachelor of Network Engineering',
        organisation: 'Changchun University of Science and Technology',
        location: 'Changchun, China',
        link: 'https://sie.cust.edu.cn/',
        iconUrl: 'professional-pages/changchun_university_of_science_and_technology.jpg',
    };

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#018BCB', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #018BCB' }}
            date={education.date}
            iconStyle={{ background: '#018BCB', color: 'black' }}
            icon={<Icon iconUrl={education.iconUrl} link={education.link} />}
        >
            <h3 className="vertical-timeline-element-title">{education.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{education.organisation}</h4>
            <h4 className="vertical-timeline-element-subtitle">{education.location}</h4>
        </VerticalTimelineElement>
    )
}