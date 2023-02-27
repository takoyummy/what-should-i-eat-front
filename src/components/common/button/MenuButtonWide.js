import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenuButtonWide = (props) => {
  const { text, classType, desc, linkUrl } = props;
  return (
    <li className="main_menu_list wide">
      <Link className="main_menu_list_box" to={linkUrl}>
        {text}
        <p className="text">{desc}</p>
        <div className={classType}></div>
      </Link>
    </li>
  );
};

// props의 기본값 타입을 설정한다.
MenuButtonWide.propTypes = {
  desc: propTypes.element, // desc의 기본값은 element
};

// 기본값
MenuButtonWide.defaultProps = {
  desc: (
    <>
      <span>뭐먹지의 점심 추천을 </span> <span>받아 보세요</span>
    </>
  ),
};

export default MenuButtonWide;
