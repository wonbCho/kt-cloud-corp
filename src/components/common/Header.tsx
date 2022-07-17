import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import MobileHeader from '@src/components/mobile/Header';
import PCHeader from '@src/components/pc/Header';

const cx = classNames.bind(styles);

interface IOwnProps {
  isLight?: boolean;
};

const Header: React.FC<IOwnProps> = ({ isLight }) => {
  return (
    <div className={cx('header')}>
      <div className={cx('pc_wrapper')}>
        <PCHeader isLight={isLight} />
      </div>
      <div className={cx('mobile_wrapper')}>
        <MobileHeader isLight={isLight} />
      </div>
    </div>
  );
};

export default Header;
