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
        <div className={cx('header_img_wrap')}>
          <img className={cx('header_img')}>
          </img>
        </div>
        <div className={cx('header_title_wrap')}>
          <img src="/assets/img/logo-white.svg"></img>
        </div>
        <button className={cx('menu_wrap')}>
          <img></img>
        </button>
        <div className={cx('header_text_wrap')}>
          <strong>당신의 새로운 일상을 이어갑니다.</strong>
        </div>
        <div className={cx('background_Pagenation_wrap')}>
          <div className={cx('background_Pagenation')} aria-selected="true"></div>
          <div className={cx('background_Pagenation')} aria-selected="false"></div>
          <div className={cx('background_Pagenation')} aria-selected="false"></div>
        </div>
      </div>
      <div className={cx('')}>

      </div>
    </div>
  );
};

export default Main;
