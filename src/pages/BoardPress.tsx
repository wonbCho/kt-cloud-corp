import React from 'react';
import classnames from 'classnames';
import styles from './BoardPress.scss';

interface IOwnProps {
};

const BoardPress: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.boardpress)}>BoardPress</div>
    </>
  );
};

export default BoardPress;
