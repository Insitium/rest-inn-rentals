import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

import React from 'react'
import { useState, useEffect } from 'react';

const SignupPage = () => {
  
  return (
    <div>
    <Header/>
      <main>
        <LoginForm/>
      </main>
    </div>
  )
}

export default SignupPage
