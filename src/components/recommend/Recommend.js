import React, { useContext, useEffect, useState } from 'react';
import sampleImg from 'assets/images/salad.jpg';
import Close from 'components/common/button/Close';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CommonContext from 'components/common/context/CommonContext';
import Loader from 'components/loader/Loader';
import axios from 'axios';

const Recommend = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { actions } = useContext(CommonContext);
  const [isLoading, setIsLoading] = useState(true);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function randomNum(min, max) {
    var randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum;
  }

  // api 3개 리스트로 수정해달라고 요청하기..ㅋㅋㅋㅋㅋㅋㅋ ㅠㅋㅋ
  function getData() {
    axios
      .all([
        axios.post('/api/location', {
          dislike: location.state?.dislike ?? decodeURI(getCookie('dislike')),
          yesterday:
            location.state?.yesterday ?? decodeURI(getCookie('yesterday')),
        }),
        axios.post('/api/location', {
          dislike: location.state?.dislike ?? decodeURI(getCookie('dislike')),
          yesterday:
            location.state?.yesterday ?? decodeURI(getCookie('yesterday')),
        }),
        axios.post('/api/location', {
          dislike: location.state?.dislike ?? decodeURI(getCookie('dislike')),
          yesterday:
            location.state?.yesterday ?? decodeURI(getCookie('yesterday')),
        }),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          const list = [];
          list.push(res1.data.data);
          list.push(res2.data.data);
          list.push(res3.data.data);
          setDataList(list);
          setIsLoading(false);
        }),
      )
      .catch((err) => console.log(err));
  }

  const goToMain = () => {
    actions.setIsPreparing(true);
    navigate('/');
  };

  const tryAgain = () => {
    // api에서 받아왔던 값들 저장해서 제외하고 뿌려주기
    // cookie에 저장?
    setCookie('dislike', location.state?.dislike, 1);
    setCookie('yesterday', location.state?.yesterday, 1);
    window.location.reload();
  };

  const setCookie = (name, value, expiredDay) => {
    const expired = new Date();
    expired.setTime(expired.getTime() + expiredDay * 24 * 60 * 60 * 1000);

    document.cookie =
      name +
      '=' +
      encodeURI(value) +
      ';expires=' +
      expired.toUTCString() +
      ';path=/';
  };

  const getCookie = (name) => {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? decodeURIComponent(value[2]) : null;
  };

  const clip = () => {
    let url = '';
    let textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    url = dataList[0].link;
    textarea.value = url;
    textarea.select();
    // deprecated ?
    document.execCommand('copy');
    document.body.removeChild(textarea);
    if (!textarea.value) {
      alert('링크가 없습니다. 네이버 지도를 클릭해주세요.');
    } else {
      alert('url이 복사되었습니다.');
    }
    return false;
  };

  const handleImgError = (e) => {
    e.target.src = sampleImg;
  }

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <section className="contents_wrap recommend_result">
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
                <img className="recommend_img" src={dataList[0].imgUrl ?? sampleImg} onError={handleImgError} alt="" />
              </div>
              <p className="recommend_title">
                {dataList[0].title.replace(/<[^>]*>?/g, '')}
              </p>
              <div className="recommend_address">
                <p className="recommend_address_title">상세주소</p>
                <p className="recommend_address_text">
                  <strong>{dataList[0].roadAddress}</strong>
                </p>
                <ul className="recommend_address_share">
                  <li>
                    <Link to="#" onClick={clip}>
                      공유하기🔗
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`/map`}
                      state={{
                        title: dataList[0].title.replace(/<[^>]*>?/g, ''),
                        mapx: dataList[0].mapx,
                        mapy: dataList[0].mapy,
                        dislike: location.state?.dislike,
                        yesterday: location.state?.yesterday,
                      }}
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
              <p className="recommend_another_title">
                이 메뉴도 좋아할 거에요!
              </p>
              <ul className="recommend_another_wrap">
                <li className="recommend_another_box">
                  <Link
                    className="recommend_another_box_link"
                    to={dataList[1].link}
                  >
                    <div className="recommend_another_img_box">
                      <img
                        className="recommend_another_img"
                        src={dataList[1].imgUrl ?? sampleImg}
                        onError={handleImgError}
                        alt=""
                      />
                    </div>
                    <p className="recommend_another_text">
                      {dataList[1].title.replace(/<[^>]*>?/g, '')}
                    </p>
                  </Link>
                </li>
                <li className="recommend_another_box">
                  <Link
                    className="recommend_another_box_link"
                    to={dataList[2].link}
                  >
                    <div className="recommend_another_img_box">
                      <img
                        className="recommend_another_img"
                        src={dataList[2].imgUrl ?? sampleImg}
                        onError={handleImgError}
                        alt=""
                      />
                    </div>
                    <p className="recommend_another_text">
                      {dataList[2].title.replace(/<[^>]*>?/g, '')}
                    </p>
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
      )}
    </>
  );
};

export default Recommend;
