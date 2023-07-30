import { React, useEffect, useRef, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Close from 'components/common/button/Close';
import CommonContext from 'components/common/context/CommonContext';

const Map = () => {
  const mapElement = useRef(null);
  const locations = useLocation();
  const navigate = useNavigate();
  const { actions } = useContext(CommonContext);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;
    const mapX = locations?.state?.mapx ?? 302147; // 없을 경우 기본값 셋팅
    const mapY = locations?.state?.mapy ?? 553444; // 없을 경우 기본값 셋팅
    console.log(mapX);
    const point = new window.naver.maps.Point(mapX, mapY);
    const latLng = new naver.maps.TransCoord.fromTM128ToLatLng(point);
    const mapOptions: naver.maps.MapOptions = {
      center: latLng,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: latLng,
      map,
    });
  }, []);

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

  const goToMain = () => {
    actions.setIsPreparing(true);
    navigate('/');
  };

  const tryAgain = () => {
    // api에서 받아왔던 값들 저장해서 제외하고 뿌려주기
    // cookie에 저장?
    setCookie('dislike', locations.state?.dislike, 1);
    setCookie('yesterday', locations.state?.yesterday, 1);
    navigate('/recommend');
  };

  return (
    <>
      <section className="contents_wrap recommend_result">
        <h1 className="blind">뭐먹지?</h1>
        <h2 className="blind">지도</h2>
        <div className="contents">
          <Close linkUrl="/" desc="닫기" />
          <div className="title_wrap type2">
            <p className="title_wrap_subject">
              <span className="text">{locations?.state?.title}</span>
              <br />
              <span className="text">의 위치는?</span>
            </p>
            <br />
            <div ref={mapElement} style={{ minHeight: '800px' }} />
          </div>
        </div>
        <button onClick={goToMain} className="wide_button">
          너로 정했다!
        </button>
        <button onClick={tryAgain} className="wide_button type1">
          한 번 더
        </button>
      </section>
    </>
  );
};

export default Map;
