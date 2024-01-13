import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-size: 62.5%;
        font-family: 'Archivo', sans-serif;
    }

    a {
        text-decoration: none;
        color: var(--dark-10);
    }

    :root {
        --brand-color: #7CA2F4;

        --dark-10: #121214;
        --dark-20: #F3F7FF;
        --dark-30: #FFFFFF;
    }
`