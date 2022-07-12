import React from 'react';
import classNames from 'classnames/bind';
import styles from './IntroducePartners.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroducePartners: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('introducepartners')}>IntroducePartners</div>
    </>
  );
};

export default IntroducePartners;
