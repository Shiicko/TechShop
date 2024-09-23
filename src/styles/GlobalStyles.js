import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color:black;
    color: white;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    
}   
a{
    text-decoration: none;
}
html{
    user-select: none;
}
`;
