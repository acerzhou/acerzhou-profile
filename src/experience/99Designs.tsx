import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from '../common/Icon';

export default function NinetyNineDesigns() {
    const experience =
    {
        date: '2021 - 2022',
        title: 'Software Developer',
        organisation: '99Designs',
        location: 'Melbourne, Australia',
        link: 'https://99designs.com',
        iconUrl: 'professional-pages/99designs.png',
    };

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#FF6052', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #FF6052' }}
            date={experience.date}
            iconStyle={{ background: '#FF6052', color: 'black' }}
            icon={<Icon iconUrl={experience.iconUrl} link={experience.link} />}
        >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.organisation}</h4>
            <h4 className="vertical-timeline-element-subtitle">{experience.location}</h4>
        </VerticalTimelineElement>
    )
}