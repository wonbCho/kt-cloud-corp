import React from 'react';
import classNames from 'classnames/bind';
import styles from './ServiceCloud.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const ServiceCloud: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('servicecloud')}>ServiceCloud</div>
    </>
  );
};

export default ServiceCloud;
