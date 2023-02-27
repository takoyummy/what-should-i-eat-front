import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './dist/css/layout.css';
import Main from './components/main/Main';
import Guide from './components/guide/Guide';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/guide" element={<Guide />} />
    </Routes>
  );
};

export default App;
