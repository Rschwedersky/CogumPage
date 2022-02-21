
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Routes';
import { GlobalStyle } from './themes/GlobalStyles';

function App() {
  return (
  <>
      <GlobalStyle/>
        <BrowserRouter>
          <Router />
        </BrowserRouter> 
  </>
      
  );
}

export default App;
