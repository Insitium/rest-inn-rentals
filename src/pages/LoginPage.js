import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

import React from 'react'
import { useState, useEffect } from 'react';

const SignupPage = () => {
  
  return (
    <div>
    <Header/>
      <main>
        <LoginForm/>
      </main>
      <Footer/>
    </div>
  )
}

export default SignupPage
