import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --gray-light: #f0f0f0;
    --gray-medium: #e0e0e0;
    --gray-dark: #c0c0c0;
    --font-family: 'NanumSquareExtraBold'; 'Noto Sans KR', sans-serif;
  }

  * {
    font-family: var(--font-family);
  }

  #root {
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  body {
    margin: 0;
    box-sizing: border-box;
    font-weight: 400;
    font-style: normal;
    text-align: center;
  }
`;
export default GlobalStyle;