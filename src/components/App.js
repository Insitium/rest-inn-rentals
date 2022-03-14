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

import '../assets/css/App.css';
import '../assets/css/utilities.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/property-listing" element={<PropertyListingPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/property/:id" element={<PropertyDetailsPage/>} />
        <Route path="/property-type-page/:type" element={<PropertyTypePage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App