import React from 'react';
import classnames from 'classnames';
import styles from './NotFound.scss';

interface IOwnProps {
};

const NotFound: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.notfound)}>NotFound</div>
    </>
  );
};

export default NotFound;
