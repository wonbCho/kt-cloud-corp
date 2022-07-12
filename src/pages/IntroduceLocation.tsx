import React from 'react';
import classNames from 'classnames/bind';
import styles from './IntroduceLocation.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroduceLocation: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('introducelocation')}>IntroduceLocation</div>
    </>
  );
};

export default IntroduceLocation;
