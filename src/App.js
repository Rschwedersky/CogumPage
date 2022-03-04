
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CogumsProvider } from './context/cogums/CogumsProvider';
import { Router } from './routes/Routes';
import { GlobalStyle } from './themes/GlobalStyles';

function App() {
  return (
  <>
      <GlobalStyle/>
      <CogumsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        </CogumsProvider> 
  </>
      
  );
}

export default App;
