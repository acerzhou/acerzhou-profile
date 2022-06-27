import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon from '../common/Icon';

export default function Jbhifi() {
    const education =
    {
        date: '2017 - 2021',
        title: 'Junior Software Developer',
        title2: 'Software Developer',
        organisation: 'JB HiFi',
        location: 'Melbourne, Australia',
        link: 'https://jbhifi.com.au',
        iconUrl: 'professional-pages/jbhifi.png',
    };

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#FEEB10', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  #FEEB10' }}
            date={education.date}
            iconStyle={{ background: '#FEEB10', color: 'black' }}
            icon={<Icon iconUrl={education.iconUrl} link={education.link} />}
        >
            <h3 className="vertical-timeline-element-title">{education.title}</h3>
            <h3 className="vertical-timeline-element-title">{education.title2}</h3>
            <h4 className="vertical-timeline-element-subtitle">{education.organisation}</h4>
            <h4 className="vertical-timeline-element-subtitle">{education.location}</h4>
        </VerticalTimelineElement>
    )
}