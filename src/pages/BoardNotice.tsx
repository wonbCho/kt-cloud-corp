import React from 'react';
import classnames from 'classnames';
import styles from './BoardNotice.scss';

interface IOwnProps {
};

const BoardNotice: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.boardnotice)}>BoardNotice</div>
    </>
  );
};

export default BoardNotice;
