import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

/**
 * @description: 메인페이지 중간사이즈 버튼.
 * @param {*} props
 * @returns
 */
const MenuButtonMiddle = (props) => {
  const { classType, text, onClick } = props;
  return (
    <>
      <li className={classNames('main_menu_list', classType)}>
        <Link className="main_menu_list_box" onClick={onClick}>
          {text}
        </Link>
      </li>
    </>
  );
};

export default MenuButtonMiddle;
