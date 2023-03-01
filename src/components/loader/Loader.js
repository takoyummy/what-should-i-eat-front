import React from 'react';

/**
 * @description: loader
 * @todo : jquery timeout, fadeIn 변환 작업 필요
 * @returns
 */
const Loader = () => {
  return (
    <section className="loader_page">
      <h1 className="blind">뭐먹지?</h1>
      <h2 className="blind">로딩 중</h2>
      <div className="contents_wrap">
        <div className="loader_wrap">
          <div className="loader">Loading...</div>
          <div className="loader_text_flip">
            <p className="loader_text">네이버 지도 평점 분석 중...</p>
            <p className="loader_text">승우아빠한테 물어보는 중...</p>
            <p className="loader_text">식객보고 우는 중...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
