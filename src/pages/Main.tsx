import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const Main: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('main')}>main</div>
    </>
  );
};

export default Main;
