import Header from '../components/Header';
import SignupForm from '../components/SignupForm';

import React from 'react'
import { useState, useEffect } from 'react';

const SignupPage = () => {
  
  return (
    <div>
    <Header/>
      <main>
        <SignupForm/>
      </main>
    </div>
  )
}

export default SignupPage
