import React from 'react';
import Contents from './Contents';
import MainVisual from './MainVisual';

const MainContents = () => {
    return (
        <main className="main_contents">
            <MainVisual />
            <Contents />
        </main>
    );
};

export default MainContents;