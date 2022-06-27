import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from '../common/Icon';

export default function Thoughtworks() {
    const experience =
    {
        date: '2022 - now',
        title: 'Senior Consultant - Developer',
        organisation: 'Thoughtworks',
        location: 'Melbourne, Australia',
        link: 'https://thoughtworks.com',
        iconUrl: 'professional-pages/thoughtworks.jpg',
    };

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#003C4F', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #003C4F' }}
            date={experience.date}
            iconStyle={{ background: '#003C4F', color: 'black' }}
            icon={<Icon iconUrl={experience.iconUrl} link={experience.link} />}
        >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.organisation}</h4>
            <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
        </VerticalTimelineElement>
    )
}