import React from 'react';
import classNames from 'classnames/bind';
import styles from './ServiceIDC.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const ServiceIDC: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('serviceidc')}>ServiceIDC</div>
    </>
  );
};

export default ServiceIDC;
