import React from 'react';
import classNames from 'classnames/bind';

const MenuButtonMiddle = (props) => {
    const { classType } = props;
    const textsArr = {
        main_menu_restaurant : "식당추천",
        main_menu_party : "점심팟",
        main_menu_schedule : "점심 스케줄러"
    }
    const text = textsArr[classType]
    return (
        <>
            <li className={classNames('main_menu_list', { classType: true} )}>
                <a className="main_menu_list_box" href="#">
                    {text}
                </a>
            </li>
        </>
    );
};

export default MenuButtonMiddle;