import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
    box-sizing: border-box;
}

body {
    background-color: #181827;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    line-height: 1.4;
    font-weight: 300;
}

::selection {
    background-color: #448fff;
}
`;
