import JordanAirLogo from '../../assets/logo-jordan.svg';

import {
    Container,
    Image,
    Title
} from './styles'

export function Logo() {
    return(
        <Container>
            <Image src={JordanAirLogo} alt="Logo Air Jordan" />
            <Title>JordanShoes</Title>
        </Container>
    )
}