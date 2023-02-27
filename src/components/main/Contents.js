import React from 'react';
import MenuButtonMiddle from '../common/button/MenuButtonMiddle';
import MenuButtonWide from '../common/button/MenuButtonWide';

/**
 * @description: 중앙 컨텐츠 영역
 * @returns
 */
const Contents = () => {
  return (
    <div className="contents">
      <nav className="main_menu">
        <ul>
          <MenuButtonWide classType="icon_box" text="메뉴추천" />
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
