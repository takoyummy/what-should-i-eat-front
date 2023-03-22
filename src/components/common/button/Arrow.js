import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @description : 뒤로가기 버튼
 * @param {*} props
 * @returns
 */
const Arrow = (props) => {
  const { linkUrl, desc } = props;
  return (
    <Link to={linkUrl} className="icon icon_arrow">
      {desc}
    </Link>
  );
};

export default Arrow;
