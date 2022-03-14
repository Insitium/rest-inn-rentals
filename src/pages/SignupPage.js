import Header from '../components/Header';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';

import React from 'react'
import { useState, useEffect } from 'react';

const SignupPage = () => {
  
  return (
    <div>
    <Header/>
      <main>
        <SignupForm/>
      </main>
    <Footer/>
    </div>
  )
}

export default SignupPage
