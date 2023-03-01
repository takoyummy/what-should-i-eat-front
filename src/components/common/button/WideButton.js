import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

/**
 * @description: 하단에서 공통으로 사용하는 와이드 버튼
 * @param {*} props
 * @returns
 */
const WideButton = (props) => {
  const { text, classType, linkUrl, type } = props;
  return (
    <Link to={linkUrl}>
      <button type={type} className={classNames('wide_button', classType)}>
        {text}
      </button>
    </Link>
  );
};

export default WideButton;
