import React from 'react';
import Arrow from '../common/button/Arrow.js';

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
        <form>
          <div className="text_box">
            <label className="type" for="yesterday_menu_text">
              입력
            </label>
            <input
              id="yesterday_menu_text"
              type="text"
              placeholder="예시) 마라탕"
              maxlength="16"
              required
            />
            <p className="text_box_focus">어제 이 메뉴를 드셨군요!</p>
          </div>
          <button type="submit" className="wide_button" onClick="link()">
            입력 완료
          </button>
        </form>
      </div>
    </section>
  );
};

export default yesterday;
