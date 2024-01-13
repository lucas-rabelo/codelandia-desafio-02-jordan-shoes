import styled from "styled-components";
import { Parallax } from "react-parallax";

import BackgroundMobile from '../../assets/background-mobile.png'
import BackgroundTablet from '../../assets/background-tablet.png'
import BackgroundDesktop from '../../assets/background-desktop.png'

export const ParallaxContainer = styled(Parallax).attrs({
    strength: 500
})``;

export const Container = styled.div`
    width: 100%;
    padding: 9.1rem 2.35rem;

    display: flex;
    flex-direction: column;

    gap: 4rem;

    background-image: url(${BackgroundMobile});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 768px) {
        background-image: url(${BackgroundTablet});
        background-position: -22rem 3rem;
    }

    @media (min-width: 1000px) {
        background-image: url(${BackgroundDesktop});
        background-size: cover;
        background-position: -65rem 0;
    }
`;

export const DescriptionArea = styled.div`
    display: flex;
    flex-direction: column;

    gap: 4rem;

    width: clamp(32.8rem, 100%, 76.8rem);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    gap: 1.2rem;
`;

export const Title = styled.h2`
    font-size: 2.6rem;
    font-weight: 500;
    color: var(--dark-30);
`;

export const Description = styled.p`
    width: 95%;

    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
    color: var(--dark-30);
`;
