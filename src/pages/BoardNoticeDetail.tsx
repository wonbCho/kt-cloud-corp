import React from 'react';
import classNames from 'classnames/bind';
import styles from './BoardNoticeDetail.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const BoardNoticeDetail: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('boardnoticedetail')}>BoardNoticeDetail</div>
    </>
  );
};

export default BoardNoticeDetail;
