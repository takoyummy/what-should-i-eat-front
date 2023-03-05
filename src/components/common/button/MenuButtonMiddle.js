import React from 'react';
import classNames from 'classnames/bind';

/**
 * @description: 메인페이지 중간사이즈 버튼.
 * @param {*} props
 * @returns
 */
const MenuButtonMiddle = (props) => {
  const { classType, text, linkUrl, onClick } = props;
  return (
    <>
      <li className={classNames('main_menu_list', classType)}>
        <a className="main_menu_list_box" onClick={onClick}>
          {text}
        </a>
      </li>
    </>
  );
};

export default MenuButtonMiddle;
