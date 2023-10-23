import icons from '../../images/sprite.svg';
import { SVG } from './Icon.styled';
interface IconsProps {
    id: string,
    onClick?: () => void;
}

export const Icon: React.FC<IconsProps> = ({id, ...props}) => {
    return <>
        <SVG {...props} width={17} height={17}>
            <use href={icons + `#${id}`} onClick={props.onClick}></use>
        </SVG>
    </>
}