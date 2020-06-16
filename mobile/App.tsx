import React from 'react';
import { StatusBar, View } from 'react-native';

import Home from './src/pages/home/index';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Home />
    </>  
  );
}
