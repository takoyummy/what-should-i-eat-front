import React from 'react';
import { useEffect, useContext } from 'react';
import MainContents from './MainContents.js';
import Footer from './Footer.js';
import MainPopup from '../common/popup/MainPopup.js';
import CommonContext from '../common/context/CommonContext';

/* TO-DO :
    1. 컴포넌트화 ( 페이지 + 공통 컴포넌트 단위로 쪼개기)
        1-1. 메인에 구글 폰트 css 추가해서 import => useEffect사용해서 마운트 시점에 완료
        1-2. 공통 컴포넌트(팝업,버튼) 스타일 상속해서 쪼개기 => 진행중
    2. jquery 변환 작업 => 퍼블리싱 담당분이 변환작업해주심
    3. 라우팅 작업 (react-router-dom) => 80% 완료
    4. 백엔드 API 작업 후 CORS 해결 => 테이블 생성 + 크롤링 + 데이터 -> api생성 이후에
    5. api 완성되면 화면에 뿌려주기 => 백엔드 api 작업 끝나고 나서
*/
/*
   03-07~03-08 night time to-do:
   1. 페이지 간 값 넘겨주는 기능 처리
   2. recommend 컴포넌트화
   3. loader.js api값 받아오는 동안(가짜로 3초정도 띄우기) 화면 렌더링 처리
   4. 상대 경로 => 절대 경로 import 개선
*/
/**
 * @description: 진입 페이지
 * @returns
 */
const Main = () => {
  const { state, actions } = useContext(CommonContext);

  useEffect(() => {
    // 컴포넌트 마운트시 font 삽입
    const link = document.createElement('link');
    link.src =
      'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap';
    link.async = true;
    document.body.appendChild(link);

    if (state.isPopupShown || !state.isPreparing) return;
    actions.setIsPopupShown(true);
    document.getElementById('pop_preparing').classList.add('show');
    setTimeout(function () {
      document.getElementById('pop_preparing').classList.remove('show');
      actions.setIsPopupShown(false);
      actions.setIsPreparing(false);
    }, 1300);
  });

  return (
    <div className="main">
      <MainContents />
      <Footer />
      <MainPopup
        id="pop_support"
        classType="support"
        text="후원의 마음만 받을게요"
      />
      <MainPopup id="pop_cheer" classType="cheer" text="응원 감사합니다" />
      <MainPopup
        id="pop_wait"
        classType="wait"
        text="업데이트 예정입니다.<br/> 조금만 기다려주세요."
      />
      <MainPopup
        id="pop_preparing"
        classType="preparing"
        text="이용해주셔서 감사합니다.<br />더 멋진 뭐먹지가 될게요."
      />
    </div>
  );
};

export default Main;
