import React from 'react';
import classNames from 'classnames/bind';
import styles from './BoardNotice.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const BoardNotice: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('boardnotice')}>BoardNotice</div>
    </>
  );
};

export default BoardNotice;
