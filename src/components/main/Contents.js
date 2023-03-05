import React, { useContext } from 'react';
import MenuButtonMiddle from '../common/button/MenuButtonMiddle';
import MenuButtonWide from '../common/button/MenuButtonWide';
import CommonContext from '../common/context/CommonContext';

/**
 * @description: 중앙 컨텐츠 영역
 * @returns
 */
const Contents = () => {
  const { state, actions } = useContext(CommonContext);

  const popupWait = () => {
    if (state.isPopupShown) return;
    actions.setIsPopupShown(true);
    document.getElementById('pop_wait').classList.add('show');
    setTimeout(function () {
      document.getElementById('pop_wait').classList.remove('show');
      actions.setIsPopupShown(false);
    }, 1300);
  };
  return (
    <div className="contents">
      <nav className="main_menu">
        <ul>
          <MenuButtonWide
            classType="icon_box"
            text="메뉴추천"
            linkUrl="guide"
          />
          <MenuButtonMiddle
            classType="main_menu_restaurant"
            text="식당추천"
            onClick={popupWait}
          />
          <MenuButtonMiddle
            classType="main_menu_party"
            text="점심팟"
            onClick={popupWait}
          />
          <MenuButtonMiddle
            classType="main_menu_schedule"
            text="점심 스케줄러"
            onClick={popupWait}
          />
        </ul>
      </nav>
    </div>
  );
};

export default Contents;
