import React from 'react';
import classNames from 'classnames/bind';
import styles from './NotFound.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const NotFound: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('notfound')}>NotFound</div>
    </>
  );
};

export default NotFound;
