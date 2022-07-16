import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import MobileHeader from '@src/components/mobile/Header';
import PCHeader from '@src/components/pc/Header';

const cx = classNames.bind(styles);

interface IOwnProps {
  isMain?: boolean;
};

const Header: React.FC<IOwnProps> = ({ isMain }) => {
  return (
    <div className={cx('header')}>
      <div className={cx('pc_wrapper')}>
        <PCHeader />
      </div>
      <div className={cx('mobile_wrapper')}>
        <MobileHeader isMain={isMain} />
      </div>
    </div>
  );
};

export default Header;
