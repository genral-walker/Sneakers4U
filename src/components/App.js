
import "./App.scss";

import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

/*
•	Use background position “fixed” to make look more interactive
•	Dim the image unless the user focus with mouse or whatever, only then will the images fully show

--OBjectives
    User should be able to search for their products
      There should be paginations for searchs and just for general
*/

import HeaderNav from './HeaderNav/HeaderNav';
import Homepage from '../pages/Home-page/Homepage';
import Footer from './Footer/Footer';

const AwayPage = () => <div>THis is an away Page!!!!</div>;

/*
    Check Count.

    "ASICS",
    "CONVERSE",
    "JORDAN",
    "NEW BALANCE",
    "NIKE",
    "OTHER",
    "PUMA",
    "REEBOK",
    "SAUCONY",
    "UNDER ARMOUR",
    "VANS",
    "YEEZY",
    "ADIDAS"

    "CHILD",
    "INFANT",
    "MEN",
    "PRESCHOOL",
    "TODDLER",
    "UNISEX",
    "WOMEN"
*/

export default function App() {

  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && <HeaderNav />}
      
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/away' exact component={AwayPage} />
      </Switch>
      <Footer />
    </>


  );
}

