import React from 'react';
import classnames from 'classnames';
import styles from './BoardNoticeDetail.scss';

interface IOwnProps {
};

const BoardNoticeDetail: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.boardnoticedetail)}>BoardNoticeDetail</div>
    </>
  );
};

export default BoardNoticeDetail;
