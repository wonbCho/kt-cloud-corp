import React from 'react';
import classNames from 'classnames/bind';
import styles from './ServiceIndex.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const ServiceIndex: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('serviceindex')}>ServiceIndex</div>
    </>
  );
};

export default ServiceIndex;
