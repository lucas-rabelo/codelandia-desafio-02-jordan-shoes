import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;

    padding-top: 5.4rem;
    padding: 5.4rem 3.2rem;
    gap: 4rem;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1.2rem;
`;

export const Title = styled.h2`
    font-size: 2rem;
    font-weight: 600;
`;

export const Subtitle = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.96rem;

    text-align: center;

    @media (min-width: 1000px) {
        width: 30%;
    }
`;

export const List = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 3.2rem;
    grid-row-gap: 4rem;
    
    @media (min-width: 767px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media (min-width: 1000px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
