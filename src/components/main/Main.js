import React from 'react';
import MainContents from './MainContents.js'
import Footer from './Footer.js'

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
        <div className="popup support">
            <p className="popup_text">후원의 마음만 받을게요</p>
        </div>
        <div className="popup cheer">
            <p className="popup_text">응원 감사합니다</p>
        </div>
        <div className="popup wait">
            <p className="popup_text">업데이트 예정입니다.<br />조금만 기다려주세요.</p>
        </div>
        <div className="popup preparing">
            <p className="popup_text">이용해주셔서 감사합니다.<br />더 멋진 뭐먹지가 될게요.</p>
        </div>

    </div>
    );
};

export default Main;