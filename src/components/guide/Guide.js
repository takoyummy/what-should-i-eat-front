import React from 'react';
import { useEffect } from 'react';
import Arrow from 'components/common/button/Arrow.js';
import WideButton from 'components/common/button/WideButton';

const Guide = () => {
  // 컴포넌트가 처음 화면에 나타났을때 스크립트 처리
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js';
    script.async = true;
    document.body.appendChild(script);
  });

  return (
    <section className="contents_wrap guide">
      <h1 className="blind">뭐먹지?</h1>
      <h2 className="blind">이용 가이드</h2>
      <div className="contents">
        <div className="util">
          <Arrow linkUrl="/" desc="뒤로가기"></Arrow>
          <div className="pagebar"></div>
        </div>
        <div className="title_wrap">
          <p className="title_wrap_subject teacher">이용 가이드</p>
          <p className="title_wrap_contents">
            상암에서 근무하는 직장인을 위해 만들었어요.
            <br />
            뭐먹지의 점심 추천을 받아 보세요.
          </p>
        </div>
        <swiper-container
          class="mySwiper"
          space-between="18"
          slides-per-view="2.43"
        >
          <swiper-slide class="guide_slider">
            <div class="icon_box paper"></div>
            <p class="guide_slider_text">이용 가이드를 숙지한다.</p>
          </swiper-slide>
          <swiper-slide class="guide_slider">
            <div class="icon_box dish"></div>
            <p class="guide_slider_text">어제 먹은 메뉴를 입력한다.</p>
          </swiper-slide>
          <swiper-slide class="guide_slider">
            <div class="icon_box defy"></div>
            <p class="guide_slider_text">불호하는 메뉴를 입력한다.</p>
          </swiper-slide>
          <swiper-slide class="guide_slider">
            <div class="icon_box noodle"></div>
            <p class="guide_slider_text">딱 맞는 메뉴를 추천 받는다.</p>
          </swiper-slide>
          <swiper-slide class="guide_slider">
            <div class="icon_box smile"></div>
            <p class="guide_slider_text">만족스러운 점심 냠냠 굿!</p>
          </swiper-slide>
        </swiper-container>
      </div>
      <WideButton
        className="wide_button"
        text="시작하기"
        linkUrl="/yesterday"
      />
    </section>
  );
};

export default Guide;
