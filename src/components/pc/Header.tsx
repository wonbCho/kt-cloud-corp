import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

interface IOwnProps { };

const Header: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('header')}>
      <div className={cx('header_wrap')}>
        <div className={cx('header_title_wrap')}>
          <img src="/assets/img/common/png/logo.png"></img>
        </div>
        <div className={cx('menu_list')}>
          <a href='#'>소개</a>
          <a href='#'>서비스</a>
          <a href='#'>홍보</a>
          <a href='#'>채용</a>
        </div>
        <div className={cx('menu_bar_wrap')}>
          <button className={cx('console_wrap')}>
            <span>
              CONSOLE
              <img className={cx('console_img')} src="/assets/img/common/svg/arrow-external.svg"></img>
            </span>
          </button>
          {/* [TODO]: 2차 스펙 */}
          {/* <button className={cx('language_wrap')}>
        <img src="/assets/img/common/svg/arrow-dropdown.svg"></img>
        <img src="/assets/img/common/svg/arrow-dropdown.svg"></img>
      </button> */}
          <button className={cx('menu_wrap')}>
            <img src="/assets/img/common/svg/menu-bar.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
