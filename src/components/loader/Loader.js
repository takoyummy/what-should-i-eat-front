import React from 'react';

/**
 * @description: loader
 * @todo : jquery timeout 작업 필요
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
