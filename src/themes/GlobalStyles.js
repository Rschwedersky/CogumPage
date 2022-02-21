import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.png'


export const GlobalStyle = createGlobalStyle`  
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 16px;
  color: #333;
  font-family: 'Montserrat', sans-serif;
  
  
}
body {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: contain;
}
`;