import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'assets/style/layout.css';
import Main from 'components/main/Main';
import Guide from 'components/guide/Guide';
import Yesterday from 'components/yesterday/Yesterday';
import Dislike from 'components/dislike/Dislike';
import Loader from 'components/loader/Loader';
import Recommend from 'components/recommend/Recommend';
import Map from 'components/map/Map';
import { CommonProvider } from 'components/common/context/CommonContext';

const App = () => {
  return (
    <CommonProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/yesterday" element={<Yesterday />} />
        <Route path="/dislike" element={<Dislike />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </CommonProvider>
  );
};

export default App;
