import React from 'react';

const Contents = () => {
    return (
        <div className="contents">
                <nav className="main_menu">
                    <ul>
                        <li className="main_menu_list wide">
                            <a className="main_menu_list_box" href="guide.html">
                                메뉴추천
                                <p className="text">
                                    <span>뭐먹지의 점심 추천을 </span><span>받아 보세요</span>
                                </p>
                                <div className="icon_box"></div>
                            </a>
                        </li>
                        {/* TO-DO: 공통 컴포넌트화 */}
                        <li className="main_menu_list main_menu_restaurant">
                            <a className="main_menu_list_box" href="#">
                                식당추천
                            </a>
                        </li>
                        <li className="main_menu_list main_menu_party">
                            <a className="main_menu_list_box" href="#">
                                점심팟
                            </a>
                        </li>
                        <li className="main_menu_list main_menu_schedule">
                            <a className="main_menu_list_box" href="#">
                                점심 스케줄러
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
    );
};

export default Contents;