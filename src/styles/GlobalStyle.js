import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`${css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    --main-color: hsl(0, 100%, 25%);
    --text-color: hsl(0, 100%, 5%);
    --highlight-color: hsl(0, 100%, 55%);
    --content-background: white;
    --content-background-alternative: #efefef;
    --small-spacing: 0.5rem;
    --medium-spacing: 1rem;
    --large-spacing: 2rem;
    --border-radius: 3px;
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

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  p {
    color: var(--text-color);
  }

  small {
    font-size: 0.75rem;
  }

  a {
    text-decoration: none;
    color: var(--highlight-color);
  }
`}`;

export default GlobalStyle;
