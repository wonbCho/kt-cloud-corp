import React from 'react';
import classNames from 'classnames/bind';

import styles from './IntroduceBanner.scss';
import Header from './Header';

const cx = classNames.bind(styles);

interface IOwnProps {
  title: string;
}

const IntroduceBanner: React.FC<IOwnProps> = ({
  title
}) => {
  return (
    <div className={cx('introduce_banner')}>
      <Header />
      <div className={cx('text_wrap')}>
        <span className={cx('text')}>{title}</span>
      </div>
    </div>
  );
};

export default IntroduceBanner;
