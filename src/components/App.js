import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";

/*
•	Use background position “fixed” to make look more interactive
•	Dim the image unless the user focus with mouse or whatever, only then will the images fully show


--OBjectives
    User should be able to search for their products
      There should be paginations for searchs and just for general

    

*/

import Hero from './Hero/Hero';
import Footer from './Footer/Footer';

function App() {
  return (
      <BrowserRouter>

        <Hero />
        <Footer />
      </BrowserRouter>
  );
}

export default App;
