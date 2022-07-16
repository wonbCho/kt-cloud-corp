import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

interface IOwnProps {
  isMain?: boolean;
};

const Header: React.FC<IOwnProps> = ({ isMain }) => {
  return (
    <div className={cx('header')}>
      <div className={cx('header_title_wrap')}>
        {isMain ? (
          <img src="/assets/img/common/png/logo_color.png"></img>
        ) : (
          <img src="/assets/img/common/png/logo.png"></img>
        )}
      </div>
      <button className={cx('menu_wrap')}>
        <img src="/assets/img/common/svg/menu-bar.svg"></img>
      </button>
    </div>
  );
};

export default Header;
