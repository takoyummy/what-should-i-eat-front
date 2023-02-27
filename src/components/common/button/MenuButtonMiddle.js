import React from 'react';
import classNames from 'classnames/bind';

const MenuButtonMiddle = (props) => {
  const { classType, text, linkUrl } = props;
  return (
    <>
      <li className={classNames('main_menu_list', classType)}>
        <a className="main_menu_list_box" href="#">
          {text}
        </a>
      </li>
    </>
  );
};

export default MenuButtonMiddle;
