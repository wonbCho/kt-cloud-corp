import React from 'react';
import classNames from 'classnames/bind';
import styles from './BoardPressDetail.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const BoardPressDetail: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('boardpressdetail')}>BoardPressDetail</div>
    </>
  );
};

export default BoardPressDetail;
