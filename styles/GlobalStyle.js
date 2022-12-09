import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}

html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
}

a {
  color: #777;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`;

