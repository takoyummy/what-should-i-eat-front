import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './dist/css/layout.css';
import Main from './components/main/Main';
import Guide from './components/guide/Guide';
import Yesterday from './components/yesterday/Yesterday';
import Dislike from './components/dislike/Dislike';
import Loader from './components/loader/Loader';
import Recommend from './components/recommend/Recommend';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/yesterday" element={<Yesterday />} />
      <Route path="/dislike" element={<Dislike />} />
      <Route path="/loader" element={<Loader />} />
      <Route path="/recommend" element={<Recommend />} />
    </Routes>
  );
};

export default App;
