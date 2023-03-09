import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * @description : 메뉴 관련 공통 폼
 * @param {*} props
 * @returns
 */
const MenuForm = (props) => {
  // yesterday.js => state넘겨주고
  // dislike.js 
  const { inputId, bottomText, linkUrl } = props;

  const navigate = useNavigate();
  // -- start 이 부분 추후 리팩터링 하기
  const location = useLocation();
  let yesterdayText
  if(linkUrl === '/recommend') {
    yesterdayText = location.state.yesterday;
  }
  // --end

  const [inputText, setInputText] = useState('');
  const [pText, setPText] = useState('');

  const onChange = ({ target: { value } }) => {
    // 1. change될때마다 글자수 체킹. 1글자 이상이면 props로 받아온 bottomText변경
    setInputText(value);
    if (value.length >= 1) {
      setPText(bottomText);
    } else {
      // 2.0글자면 bottoText 초기값 세팅
      setPText('');
    }
  };

  const onSubmit = () => {
    // 1. inputText에 있는 것들 id값 뽑아서 객체로 저장

    // 2. state에 넘겨받은 url 던져주기

    // refactoring 요함
    if(linkUrl === '/recommend') {
      navigate(linkUrl, {state : { yesterday: yesterdayText, dislike: inputText }});
    } else {
      navigate(linkUrl, {state: { yesterday : inputText }});
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="text_box">
        <label className="type" htmlFor={inputId}>
          입력
        </label>
        <input
          id={inputId}
          type="text"
          placeholder="예시) 마라탕"
          maxLength="16"
          value={inputText}
          onChange={onChange}
          required
        />
        <p className="text_box_focus">{pText}</p>
      </div>
      <button type="submit" className="wide_button">
        입력 완료
      </button>
    </form>
  );
};

export default MenuForm;
