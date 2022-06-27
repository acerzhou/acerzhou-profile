import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

const IconImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
`;
interface Props {
    link: string,
    iconUrl: string
}

export default function Icon({ link, iconUrl }: Props) {
    return <a href={link} target='_blank' rel="noreferrer">
        <IconImage src={iconUrl} alt='icon' />
    </a>
}
