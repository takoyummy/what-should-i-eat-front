import React from 'react';
import MenuButtonMiddle from '../common/button/MenuButtonMiddle';
import MenuButtonWide from '../common/button/MenuButtonWide';

/**
 * @description: 중앙 컨텐츠 영역
 * @returns
 */
/* jquery의 fade-in react 라이브러리에서 지원하는 것으로 바꾸기*/
/* https://grownfresh.tistory.com/128 */
const Contents = () => {
  return (
    <div className="contents">
      <nav className="main_menu">
        <ul>
          <MenuButtonWide
            classType="icon_box"
            text="메뉴추천"
            linkUrl="guide"
          />
          <MenuButtonMiddle classType="main_menu_restaurant" text="식당추천" />
          <MenuButtonMiddle classType="main_menu_party" text="점심팟" />
          <MenuButtonMiddle
            classType="main_menu_schedule"
            text="점심 스케줄러"
          />
        </ul>
      </nav>
    </div>
  );
};

export default Contents;
