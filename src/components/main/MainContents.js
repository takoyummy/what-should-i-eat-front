import React from 'react';
import Contents from './Contents';
import MainVisual from './MainVisual';

/**
 * @description: 메인 중앙 페이지
 * @returns
 */
const MainContents = () => {
  return (
    <main className="main_contents">
      <MainVisual />
      <Contents />
    </main>
  );
};

export default MainContents;
