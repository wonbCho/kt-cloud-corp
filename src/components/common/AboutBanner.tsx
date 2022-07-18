import React from 'react';
import classNames from 'classnames/bind';
import styles from './AboutBanner.scss';
import MobileAboutBanner from '@src/components/mobile/AboutBanner';
import PCAboutBanner from '@src/components/pc/AboutBanner';

const cx = classNames.bind(styles);

interface IOwnProps { };

const AboutBanner: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('about_banner')}>
      <div className={cx('pc_wrapper')}>
        <PCAboutBanner />
      </div>
      <div className={cx('mobile_wrapper')}>
        <MobileAboutBanner />
      </div>
    </div>
  );
};

export default AboutBanner;
