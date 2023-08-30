import React from 'react';
import { useEffect, useContext } from 'react';
import MainContents from 'components/main/MainContents.js';
import Footer from 'components/main/Footer.js';
import MainPopup from 'components/common/popup/MainPopup.js';
import CommonContext from 'components/common/context/CommonContext';

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
