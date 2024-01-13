import { Product } from '../Product';

import {
    Container,
    Header,
    Title,
    Subtitle,
    List
} from './styles';

import { products } from '../../utils/products';

export function ProductList() {
    return(
        <Container>
            <Header>
                <Title>Os melhores em só lugar</Title>
                <Subtitle>A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.</Subtitle>
            </Header>

            <List>
                {products.map(product => (
                    <Product 
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        alternative={product.alternative}
                        category={product.category}
                        price={product.price}
                    />
                ))}
            </List>
        </Container>
    )
}