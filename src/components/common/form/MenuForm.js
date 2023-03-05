import React from 'react';
import { useState } from 'react';

/**
 * @description : 메뉴 관련 공통 폼
 * @param {*} props
 * @returns
 */
const MenuForm = (props) => {
  const { inputId, bottomText } = props;

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

  // 여기에 api연결하고 동기 처리(async-await) 한 뒤, 페이지 컴포넌트 라우팅 처리하기
  const onSubmit = () => {
    console.log('submit');
  };

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
