import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/globalStyle';
import { StyledWrapper } from '../styles/main.style';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledWrapper>
        <App />
      </StyledWrapper>
    </ThemeProvider>
  </React.StrictMode>,
);
