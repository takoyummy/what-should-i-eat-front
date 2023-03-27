import React, { useContext, useEffect, useState } from 'react';
import testImg from 'assets/images/test.jpg';
import Close from 'components/common/button/Close';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CommonContext from 'components/common/context/CommonContext';
import Loader from 'components/loader/Loader';

const Recommend = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { actions } = useContext(CommonContext);
  const [ isLoading, setIsLoading ] = useState(true);
  const [data, setData] = useState('');
  
  useEffect(() => {
    console.log(location.state);
    // 3초정도 Loader 띄우고 => 추후 api로 교체 
    getData();
  });

  // 이 부분 나중에 api로 바꾸기
  function getData() {
    setTimeout(() => {
      setData('sample data');
      setIsLoading(false);
    }, 2000);
  }

  const goToMain = () => {
    actions.setIsPreparing(true);
    navigate('/');
  };

  const tryAgain = () => {
    // api에서 받아왔던 값들 저장해서 제외하고 뿌려주기
    // cookie에 저장? 
    window.location.reload();
  }

  const clip = () => {
    let url = '';
    let textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    url = 'https://naver.me/Fcagg6Mm';
    textarea.value = url;
    textarea.select();
    // deprecated ?
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('url이 복사되었습니다.');
    return false;
  };

  return (
    <>
    {isLoading && <Loader/>}
    {data && <section className="contents_wrap recommend_result">
      <h1 className="blind">뭐먹지?</h1>
      <h2 className="blind">추천 결과</h2>
      <div className="contents">
        <Close linkUrl="/" desc="닫기" />
        <div className="title_wrap type2">
          <p className="title_wrap_subject">
            <span className="text">오늘 당신에게 딱 맞는</span>
            <span className="text">
              점심 메뉴는?<span className="icon icon_chef"></span>
            </span>
          </p>
        </div>
        {/* recommend :: 개발 :: 이미지, 상호명, 주소명, 링크 주소 */}
        <div className="recommend">
          <div className="recommend_box">
            <img className="recommend_img" src={testImg} alt="" />
          </div>
          <p className="recommend_title">개미집 상암점</p>
          <div className="recommend_address">
            <p className="recommend_address_title">상세주소</p>
            <p className="recommend_address_text">
              <strong>
                서울 마포구 월드컵북로 396 누리꿈스퀘어 공동제작센터 2층
              </strong>
            </p>
            <ul className="recommend_address_share">
              <li>
                <Link to="#" onClick={clip}>
                  공유하기🔗
                </Link>
              </li>
              <li>
                <Link
                  to="https://naver.me/Fcagg6Mm"
                  target="_blank"
                  title="새 창"
                >
                  네이버지도🗺
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- // recommend --> */}
        <div className="line"></div>
        {/* <!-- recommend_another :: 개발 :: 이미지, 상호명, 링크값 --> */}
        <div className="recommend_another">
          <p className="recommend_another_title">이 메뉴도 좋아할 거에요!</p>
          <ul className="recommend_another_wrap">
            <li className="recommend_another_box">
              <Link className="recommend_another_box_link" to="#">
                <div className="recommend_another_img_box">
                  <img className="recommend_another_img" src={testImg} alt="" />
                </div>
                <p className="recommend_another_text">도락</p>
              </Link>
            </li>
            <li className="recommend_another_box">
              <Link className="recommend_another_box_link" to="#">
                <div className="recommend_another_img_box">
                  <img className="recommend_another_img" src={testImg} alt="" />
                </div>
                <p className="recommend_another_text">상암회관</p>
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- // recommend_another -->*/}
      </div>
      <button onClick={goToMain} className="wide_button">
        너로 정했다!
      </button>
      {/* <!-- 개발 :: 메인화면으로 돌아갈 시, .preparing 팝업 띄우기  --> */}
      <button onClick={tryAgain} className="wide_button type1">
        한 번 더
      </button>
    </section>
    }
    </>
  );
};

export default Recommend;
