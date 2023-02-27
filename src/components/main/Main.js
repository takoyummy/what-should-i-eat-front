import React from 'react';
import { useEffect } from 'react';
import MainContents from './MainContents.js';
import Footer from './Footer.js';
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
/**
 * @description: 진입 페이지
 * @returns
 */
const Main = () => {
  // 컴포넌트 마운트시 font 삽입
  useEffect(() => {
    const link = document.createElement('link');
    link.src =
      'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap';
    link.async = true;
    document.body.appendChild(link);
  });

  return (
    <div className="main">
      <MainContents />
      <Footer />
      {/* 스크립트 적용시 이벤트 만들기*/}
      <MainPopup classType="support" text="후원의 마음만 받을게요" />
      <MainPopup classType="cheer" text="응원 감사합니다" />
      <MainPopup
        classType="wait"
        text="업데이트 예정입니다.<br/> 조금만 기다려주세요."
      />
      <MainPopup
        classType="preparing"
        text="이용해주셔서 감사합니다.<br />더 멋진 뭐먹지가 될게요."
      />
    </div>
  );
};

export default Main;
