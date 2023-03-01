import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @description : x 버튼
 * @returns
 */
const Close = (props) => {
  const { linkUrl, desc } = props;
  return (
    <Link to={linkUrl} className="icon icon_cancel">
      {desc}
    </Link>
  );
};

export default Close;
