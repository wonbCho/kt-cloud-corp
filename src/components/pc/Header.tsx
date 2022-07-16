import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

interface IOwnProps { };

const Header: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('header')}>
      <img src='/assets/img/pc/png/main.png' className={cx('header_img')}></img>
      <div className={cx('header_contents_wrap')}>
        <div className={cx('header_title_wrap')}>
          <img src="/assets/img/common/png/logo.png"></img>
        </div>
        <div className={cx('menu_list')}>
          <span>소개</span>
          <span>서비스</span>
          <span>홍보</span>
          <span>채용</span>
        </div>
        <button className={cx('console')}>
          <img src="/assets/img/common/svg/group-44.svg"></img>
        </button>
        <button className={cx('language')}>
          <img src="/assets/img/common/svg/group-44.svg"></img>
        </button>
        <button className={cx('menu_wrap')}>
          <img src="/assets/img/common/svg/group-44.svg"></img>
        </button>
        <strong className={cx('header_text_wrap')}>당신의 새로운 일상을 이어갑니다.</strong>
        <div className={cx('background_pagenation_wrap')}>
          <div className={cx('background_pagenation')} aria-selected="true"></div>
          <div className={cx('background_pagenation')} aria-selected="false"></div>
          <div className={cx('background_pagenation')} aria-selected="false"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
