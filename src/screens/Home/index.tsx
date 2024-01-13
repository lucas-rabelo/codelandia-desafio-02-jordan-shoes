import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { ProductList } from '../../components/ProductList'
import { Footer } from '../../components/Footer'

import { Container } from './styles'

export function Home() {
    return(
        <Container>
            <Header />
            <Banner />
            <ProductList />
            <Footer />
        </Container>
    )
}