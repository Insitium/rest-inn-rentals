import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import PropertyListingPage from '../pages/PropertyListingPage';
import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';
import PropertyDetailsPage from '../pages/PropertyDetailsPage';
import PropertyTypePage from '../pages/PropertyTypePage';
import BestSellerPage from '../pages/BestSellerPage';

import '../assets/css/App.css';
import '../assets/css/utilities.css';

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/properties" element={<PropertyListingPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/properties/:id" element={<PropertyDetailsPage/>} />
        <Route path="/properties/title-type/:type" element={<PropertyTypePage/>} />
        <Route path="/properties/bestSeller" element={<BestSellerPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
