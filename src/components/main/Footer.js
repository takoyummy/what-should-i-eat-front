import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CommonContext from '../common/context/CommonContext';

const Footer = () => {
  const { state, actions } = useContext(CommonContext);

  const popupSupport = () => {
    if (state.isPopupShown) return;
    actions.setIsPopupShown(true);
    document.getElementById('pop_support').classList.add('show');
    setTimeout(function () {
      document.getElementById('pop_support').classList.remove('show');
      actions.setIsPopupShown(false);
    }, 1300);
  };

  const popupCheer = () => {
    if (state.isPopupShown) return;
    actions.setIsPopupShown(true);
    document.getElementById('pop_cheer').classList.add('show');
    setTimeout(function () {
      document.getElementById('pop_cheer').classList.remove('show');
      actions.setIsPopupShown(false);
    }, 1300);
  };

  return (
    <footer className="main_footer">
      <ul className="main_footer_top">
        <li>
          <Link
            className="main_footer_top_link support"
            to="#"
            onClick={popupSupport}
          >
            후원하기💖
          </Link>
        </li>
        <li>
          <Link
            className="main_footer_top_link cheer"
            to="#"
            onClick={popupCheer}
          >
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
