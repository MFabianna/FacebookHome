import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return <HomeScreen onLogout={() => setIsLoggedIn(false)} />;
}