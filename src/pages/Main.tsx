import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const Main: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('main')}>
      <div className={cx('header')}>
        <img src='/assets/img/temp1.png' className={cx('header_img')}></img>
        <div className={cx('header_title_wrap')}>
          <img src="/assets/img/logo-white.svg"></img>
        </div>
        <button className={cx('menu_wrap')}>
          <img ></img>
        </button>
        <div className={cx('header_text_wrap')}>
          <strong>당신의 새로운 일상을 이어갑니다.</strong>
        </div>
        <div className={cx('background_pagenation_wrap')}>
          <div className={cx('background_pagenation')} aria-selected="true"></div>
          <div className={cx('background_pagenation')} aria-selected="false"></div>
          <div className={cx('background_pagenation')} aria-selected="false"></div>
        </div>
      </div>
      <div className={cx('ture_cloud_wrap')}>
        <img className={cx('ture_cloud_img')} src='/assets/img/temp2.png'></img>
        <span className={cx('ture_cloud_text')}>Connect New Life</span>
        <strong className={cx('ture_cloud_title')}>Ture Cloud</strong>
      </div>
      <div className={cx('kt_cloud_learn_wrap')}>
        <p className={cx('learn_text')}>
          새로운 일상으로의 연결,
          <br />
          KT Cloud로 일상의 디지털을 이어갑니다.
        </p>
        <a href='#' className={cx('learn_link')}>자세히 알아보기</a>
      </div>
      <div className={cx('idc_service_wrap')}>
        <img src='/assets/img/temp1.png' className={cx('idc_service_img')}></img>
        <strong className={cx('idc_service_title')}>IDC Service</strong>
        <strong className={cx('idc_service_sub_title')}>World Standard Data Center</strong>
        <a href='#' className={cx('idc_service_link')}></a>
        <p className={cx('idc_service_text')}>대한민국 첫 데이터센터 가장 안전하며 대한민국을 넘어 세계 표준의 환경을 제공합니다</p>
        <div className={cx('background_pagenation_wrap')}>
          <div className={cx('background_pagenation')} aria-selected="true"></div>
          <div className={cx('background_pagenation')} aria-selected="false"></div>
          <div className={cx('background_pagenation')} aria-selected="false"></div>
        </div>
      </div>
      <div className={cx('kt_cloud_news_wrap')}>


      </div>
    </div>
  );
};

export default Main;
