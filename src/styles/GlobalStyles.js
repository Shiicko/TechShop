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
}  h2 {
    font-size: 1.3rem;
    color: #ffffff;
    text-align: center;
    margin-bottom: 12px;
  }

  p {
    font-size: 1rem;
    color: #cfd8dc;
    margin: 10px 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 10px;

    li {
      color: #b0bec5;
      padding-left: 1.2rem;
      position: relative;
      margin-bottom: 8px;
      font-size: 0.95rem;

      &::before {
        content: "➤";
        position: absolute;
        left: 0;
        color: #00e5ff;
        font-size: 0.9rem;
      }

      strong {
        color: #64ffda;
      }
    }
  }
`;
