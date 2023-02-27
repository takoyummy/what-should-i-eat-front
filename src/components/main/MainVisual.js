import React from 'react';

/**
 * @description: 메인페이지 top영역
 * @returns
 */
const MainVisual = () => {
  return (
    <div className="main_visual">
      <div className="title_wrap type1">
        <h1 className="title_wrap_subject">
          뭐먹지?<span className="beta">BETA</span>
        </h1>
        <p className="title_wrap_desc">
          직장인 최대 난제 점심메뉴
          <br />
          뭐먹지로 해결하세요!
        </p>
      </div>
    </div>
  );
};

export default MainVisual;
