import React from 'react';
import MainContents from './MainContents.js'
import Footer from './Footer.js'
import MainPopup from '../common/popup/MainPopup.js';

/* TO-DO :
    1. 컴포넌트화 ( 페이지 + 공통 컴포넌트 단위로 쪼개기)
        1-1. 메인에 구글 폰트 css 추가해서 import
        1-2. 공통 컴포넌트(팝업,버튼) 스타일 상속해서 쪼개기
    2. jquery 변환 작업
    3. 라우팅 작업 (react-router-dom)
    4. 백엔드 API 작업 후 CORS 해결
    5. api 완성되면 화면에 뿌려주기
*/ 
const Main = () => {
    return (
    <div className="main">
        <MainContents />
        <Footer />
        {/* 스크립트 적용시 이벤트 만들기*/}
        <MainPopup classType="support" />
        <MainPopup classType="cheer" />
        <MainPopup classType="wait" />
        <MainPopup classType="preparing" />
    </div>
    );
};

export default Main;