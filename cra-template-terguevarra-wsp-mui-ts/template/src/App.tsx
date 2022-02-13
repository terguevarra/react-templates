import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';

import theme from 'themes/wsp-theme';
import useGlobalStyles from 'themes/useGlobalStyles';
import Auth from '@components/Auth';
import MainRouter from 'routes/MainRouter';

function App() {
  useGlobalStyles();
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Auth />
          <CssBaseline />
          <MainRouter />
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
