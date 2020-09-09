import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Global */
* {
    box-sizing: border-box;
}
 
body,
html {
    height: 100%;
    min-height: 100%;
}
 
body {
    font-family: 'Roboto',
    sans-serif;
    margin: 0;
    background-color: #e7e7e7;
}
`
export default GlobalStyle;