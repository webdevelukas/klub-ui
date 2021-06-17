import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`${css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    --content-background: white;
    --small-spacing: 0.5rem;
    --medium-spacing: 1rem;
    --large-spacing: 2rem;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    font-size: 16px;
  }

  p {
    margin: 0;
  }
`}`;

export default GlobalStyle;
