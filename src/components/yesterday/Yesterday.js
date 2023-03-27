import React from 'react';
import Arrow from 'components/common/button/Arrow.js';
import MenuForm from 'components/common/form/MenuForm.js';

const yesterday = () => {
  return (
    <section className="contents_wrap yesterday_menu">
      <h1 className="blind">뭐먹지?</h1>
      <h2 className="blind">어제 먹은 메뉴</h2>
      <div className="contents">
        <div className="util">
          <Arrow linkUrl="/guide" desc="이전"></Arrow>
          <div className="pagebar type1"></div>
        </div>
        <div className="title_wrap">
          <p className="title_wrap_subject chef">어제 어떤 메뉴를 드셨나요?</p>
          <p className="title_wrap_contents">
            기억이 나지 않는다면 넘어가도 괜찮아요.
          </p>
        </div>
        <MenuForm inputId="yesterday_menu_text" bottomText="어제 이 메뉴를 드셨군요!" linkUrl="/dislike"></MenuForm>
      </div>
    </section>
  );
};

export default yesterday;
