import React from 'react';
import classNames from 'classnames/bind';
import styles from './IntroduceInfomation.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroduceInfomation: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('introduceinfomation')}>IntroduceInfomation</div>
    </>
  );
};

export default IntroduceInfomation;
