import React from 'react';
import Arrow from '../common/button/Arrow.js';
import MenuForm from '../common/form/MenuForm.js';

const Dislike = () => {
  return (
    <section class="contents_wrap dislike_menu">
      <h1 class="blind">뭐먹지?</h1>
      <h2 class="blind">불호하는 메뉴</h2>
      <div class="contents">
        <div class="util">
          <Arrow linkUrl="/yesterday" desc="이전"></Arrow>
          <div class="pagebar type2"></div>
        </div>
        <div class="title_wrap">
          <p class="title_wrap_subject defy">불호하는 메뉴가 있나요?</p>
          <p class="title_wrap_contents">
            불호하는 메뉴가 없다면 넘어가도 괜찮아요.
          </p>
        </div>
        <MenuForm inputId="dislike_menu_text" bottomText="이 메뉴를 싫어하시는군요!" linkUrl="/recommend"/>
        {/* <form>
          <div class="text_box">
            <label class="type" htmlFor="dislike_menu_text">
              입력
            </label>
            <input
              id="dislike_menu_text"
              type="text"
              placeholder="예시) 마라탕"
              maxLength="16"
              required
            />
            <p class="text_box_focus">이 메뉴를 싫어하시는군요!</p>
          </div>
          <button type="submit" class="wide_button" onClick="link()">
            입력 완료
          </button>
        </form> */}
      </div>
    </section>
  );
};

export default Dislike;
