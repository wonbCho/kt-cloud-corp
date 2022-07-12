import React from 'react';
import styles from './Loading.scss';
import classNames from 'classnames/bind';

const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <span className={styles.icon_loading}>
        <span className={classnames('blind')}>loading</span>
      </span>
    </div>
  );
};

export default Loading;
