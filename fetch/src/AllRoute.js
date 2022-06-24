import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";


function AllRoute() {
  return (
    <Fragment>
      <Router>
        
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default AllRoute;
