import React from 'react';

const MainContents = () => {
    return (
        <main className="main_contents">
            <div className="main_visual">
                <div className="title_wrap type1">
                    <h1 className="title_wrap_subject">뭐먹지?<span className="beta">BETA</span></h1>
                    <p className="title_wrap_desc">직장인 최대 난제 점심메뉴<br />뭐먹지로 해결하세요!</p>
                </div>
            </div>
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
        </main>
    );
};

export default MainContents;