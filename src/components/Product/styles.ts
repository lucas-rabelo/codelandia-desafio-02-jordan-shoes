import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--dark-20);

    padding: 2rem 3rem;
`;

export const Image = styled.img`
    width: 22.5rem;
    height: 13.5rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1.2rem;
`;

export const Title = styled.h3`
    font-size: 1.6rem;
    font-weight: 500;
`;

export const Category = styled.h4`
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--brand-color);
`;

export const Footer = styled.h2`
    font-size: 2rem;
    font-weight: 500;
`;
