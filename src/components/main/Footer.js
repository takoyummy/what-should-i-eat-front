import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main_footer">
      <ul className="main_footer_top">
        <li>
          <Link className="main_footer_top_link support" to="#">
            후원하기💖
          </Link>
        </li>
        <li>
          <Link className="main_footer_top_link cheer" to="#">
            응원하기🙌
          </Link>
        </li>
        <li>
          <Link
            className="main_footer_top_link request"
            to="https://forms.gle/rg4HYCMDjXvjDJRv9"
            target="_blank"
            title="새 창"
          >
            요청하기📣
          </Link>
        </li>
      </ul>
      <div className="main_footer_bottom">
        <strong>뭐먹지? </strong>Copyright©뭐먹지 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
