import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// pages
import homePage from '../pages/home'
import contactPage from '../pages/contact'

import '../styles/app.scss'

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Route path="/" exact component={homePage} />
        <Route path="/contact" exact component={contactPage} />
      </BrowserRouter>
    </div>
  );
};

export default App;