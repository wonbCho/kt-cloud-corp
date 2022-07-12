import React from 'react';
import classNames from 'classnames/bind';
import styles from './ServiceGCloud.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const ServiceGCloud: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('servicegcloud')}>ServiceGCloud</div>
    </>
  );
};

export default ServiceGCloud;
