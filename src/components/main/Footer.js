import React from 'react';

const Footer = () => {
    return (
    <footer className="main_footer">
        <ul className="main_footer_top">
            <li><a className="main_footer_top_link support" href="#">후원하기💖</a></li>
            <li><a className="main_footer_top_link cheer" href="#">응원하기🙌</a></li>
            <li><a className="main_footer_top_link request" href="https://forms.gle/rg4HYCMDjXvjDJRv9" target="_blank" title="새 창">요청하기📣</a></li>
        </ul>
        <div className="main_footer_bottom">
            <strong>뭐먹지? </strong>Copyright©뭐먹지 All rights reserved.
        </div>
    </footer>
    );
};

export default Footer;