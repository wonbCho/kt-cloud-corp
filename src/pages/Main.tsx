import React from 'react';
import classnames from 'classnames';
import styles from './Main.scss';

interface IOwnProps {
};

const Main: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.main)}>main</div>
    </>
  );
};

export default Main;
