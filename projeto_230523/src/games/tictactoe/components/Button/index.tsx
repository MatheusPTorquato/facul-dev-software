import * as C from './styles';

type Props = {
    label: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button =({label, onClick}: Props) => {
    return(
        <C.Container onClick={onClick}>
            <C.Label>{label}</C.Label>
        </C.Container>
    );
}