import React from 'react';
import classNames from 'classnames/bind';
import styles from './IntroduceAbout.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroduceAbout: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('introduceabout')}>IntroduceAbout</div>
    </>
  );
};

export default IntroduceAbout;
