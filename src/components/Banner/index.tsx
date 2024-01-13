import { Logo } from "../Logo"
import { Wrapper } from "../Layouts/Wrapper"

import {
    ParallaxContainer,
    Container,
    DescriptionArea,
    Content,
    Title,
    Description
} from './styles'

export function Banner() {
    return(
        <ParallaxContainer>
            <Container>
                <Wrapper>
                    <DescriptionArea>
                        <Logo />

                        <Content>
                            <Title>
                                A melhor loja de Jordan
                            </Title>

                            <Description>
                                O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.
                            </Description>
                        </Content>
                    </DescriptionArea>
                </Wrapper>
            </Container>
        </ParallaxContainer>
    )
}