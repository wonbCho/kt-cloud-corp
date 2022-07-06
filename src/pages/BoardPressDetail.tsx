import React from 'react';
import classnames from 'classnames';
import styles from './BoardPressDetail.scss';

interface IOwnProps {
};

const BoardPressDetail: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.boardpressdetail)}>BoardPressDetail</div>
    </>
  );
};

export default BoardPressDetail;
