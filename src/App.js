import React from 'react';
import GlobalStyle from "./globalStyles";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Signup from "./pages/SignupPage";
import Pricing from "./pages/PricingPage";

function App() {
  return (
    <Router>
        <GlobalStyle />

        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/pricing' element={<Pricing />}/>
        </Routes>
    </Router>
  );
}

export default App;
