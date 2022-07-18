import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.scss';
import Foorter from '@src/components/common/Footer';
import Header from '@src/components/common/Header';
import CardItem from '@src/components/common/CardItem';
import Popup from '@src/components/common/Popup';
import MainBanner from '@src/components/common/MainBanner';
import AboutBanner from '@src/components/common/AboutBanner';
import ServiceBanner from '@src/components/common/ServiceBanner';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const Main: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('main')}>
      <Popup />
      <Header />
      <MainBanner />
      <AboutBanner />
      <ServiceBanner />
      <div className={cx('main_contents_wrap')}>
        <strong className={cx('kt_cloud_news')}>
          KT Cloud가
          {' '}
          <br className={cx('mobile_wrapper')} />
          이룬 소식을 전합니다.
        </strong>
        <ul className={cx('news_wrap')}>
          <li className={cx('news_contents_wrap')}>
            <div className={cx('contents_wrap')}>
              <a className={cx('news_img_wrap')} href=''>
                <img className={cx('news_img')} src='/static/img/common/png/img1.png' />
              </a>
              <p className={cx('news_title')}>KT 클라우드, 출정식 개최…클라우드·IDC 역량 결집</p>
              <p className={cx('news_date')}>2022.06.08</p>
            </div>
          </li>
          <li className={cx('news_contents_wrap')}>
            <div className={cx('contents_wrap')}>
              <a className={cx('news_img_wrap')} href=''>
                <img className={cx('news_img')} src='/static/img/common/png/img2.png' />
              </a>
              <p className={cx('news_title')}>KT, 클라우드 생태계 상생 확대, 장터 입점 기업 수익 보전</p>
              <p className={cx('news_date')}>2022.06.08</p>
            </div>
          </li>
          <li className={cx('news_contents_wrap')}>
            <div className={cx('contents_wrap')}>
              <a className={cx('news_img_wrap')} href=''>
                <img className={cx('news_img')} src='/static/img/common/png/img3.png' />
              </a>
              <p className={cx('news_title')}>KT-틸론, DaaS 플랫폼 공동개발 MOU 체결</p>
              <p className={cx('news_date')}>2022.06.08</p>
            </div>
          </li>
          <li className={cx('news_contents_wrap')}>
            <div className={cx('contents_wrap')}>
              <a className={cx('news_img_wrap')} href=''>
                <img className={cx('news_img')} src='/static/img/common/png/img4.png' />
              </a>
              <p className={cx('news_title')}>KT, 소상공인시장진흥공단 클라우드 전환사업 수주</p>
              <p className={cx('news_date')}>2022.06.08</p>
            </div>
          </li>
          <li className={cx('news_contents_wrap')}>
            <div className={cx('contents_wrap')}>
              <a className={cx('news_img_wrap')} href=''>
                <img className={cx('news_img')} src='/static/img/common/png/img5.png' />
              </a>
              <p className={cx('news_title')}>개방형 공공 클라우드 KT 파스타, CSAP 획득</p>
              <p className={cx('news_date')}>2022.06.08</p>
            </div>
          </li>
          <li className={cx('news_contents_wrap')}>
            <div className={cx('contents_wrap')}>
              <a className={cx('news_img_wrap')} href=''>
                <img className={cx('news_img')} src='/static/img/common/png/img6.png' />
              </a>
              <p className={cx('news_title')}>KT 2분기 DX 선전 이끈 클라우드의 힘</p>
              <p className={cx('news_date')}>2022.06.08</p>
            </div>
          </li>
        </ul>
        <div className={cx('mobile_wrapper')}>
          <a href='#' className={cx('learn_link')}>자세히 알아보기</a>
        </div>
        <CardItem />
      </div>
      <Foorter />
    </div >
  );
};

export default Main;
