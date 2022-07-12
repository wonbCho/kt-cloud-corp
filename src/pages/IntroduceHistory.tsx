import React from 'react';
import classNames from 'classnames/bind';
import styles from './IntroduceHistory.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroduceHistory: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('introducehistory')}>IntroduceHistory</div>
    </>
  );
};

export default IntroduceHistory;
