import { createGlobalStyle } from 'styled-components';
import background from '../assets/fundo.webp'


export const GlobalStyle = createGlobalStyle`  
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 26px;
  font-family: 'Amatic SC', cursive;
  
  
}
body {
    /* background-image: url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: 100vh; */
    background-color: #e0e0e0
}
`;