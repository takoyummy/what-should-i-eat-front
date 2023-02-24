import React from 'react';
import classNames from '../../../../node_modules/classnames/index';

/**
 * @description: 공통 팝업 컴포넌트. props로 classType 속성(support, cheer, wait, preparing)을 받는다.
 * @param {*} props 
 * @returns 
 */
const MainPopup = (props) => {
    // 1. support => 후원의 마음만 받을게요
    // 2. cheer => 응원 감사합니다
    // 3. wait => 업데이트 예정입니다.<br />조금만 기다려주세요.
    // 4. preparing => 이용해주셔서 감사합니다.<br />더 멋진 뭐먹지가 될게요.
    /* classNames에 대해서는
     https://chanhuiseok.github.io/posts/react-14/ 참고
    */

    // classTypes 
    const { classType } = props;

    const textsArr = {
        support : "후원의 마음만 받을게요",
        cheer : "응원 감사합니다",
        wait : "업데이트 예정입니다.<br/> 조금만 기다려주세요.",
        preparing : "이용해주셔서 감사합니다.<br />더 멋진 뭐먹지가 될게요."
    }

    const text = textsArr[classType]

    return (
        <div className={classNames('popup', {classType: true})}>
            <p class="popup_text">{text}</p>
        </div>
    );
};

export default MainPopup;