import {
    Container,
    Header,
    Image,
    Content,
    Title,
    Category,
    Footer,
} from './styles';

interface Props {
    image: string;
    alternative: string;
    title: string;
    category: string;
    price: string;
}

export function Product({ image, alternative, title, category, price }: Props) {
    return(
        <Container>
            <Header>
                <Image src={ image } alt={alternative}/>
            </Header>
            <Content>
                <Title>
                    {title}
                </Title>
                <Category>
                    {category}
                </Category>
            </Content>
            <Footer>
                R$ {price}
            </Footer>
        </Container>
    )
}