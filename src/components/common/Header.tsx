import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import MobileHeader from '@src/components/mobile/Header';
import PCHeader from '@src/components/pc/Header';

const cx = classNames.bind(styles);

interface IOwnProps { };

const Header: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('header')}>
      <div className={cx('pc_wrapper')}>
        <PCHeader />
      </div>
      <div className={cx('mobile_wrapper')}>
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
