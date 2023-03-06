import React from 'react';

/**
 * @description: loader
 * @todo : api 데이터 받아올때까지 로딩화면으로 쓸 예정.
 * @returns
 */
const Loader = () => {
  return (
    <section class="loader_page">
      <h1 class="blind">뭐먹지?</h1>
      <h2 class="blind">로딩 중</h2>
      <div class="contents_wrap">
        <div class="loader_wrap">
          <div class="loader">Loading...</div>
          <div class="loader_text"></div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
