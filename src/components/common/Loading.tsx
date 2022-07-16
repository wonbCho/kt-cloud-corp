import React from 'react';
import styles from './Loading.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <span className={styles.icon_loading}>
        <span className={cx('blind')}>loading</span>
      </span>
    </div>
  );
};

export default Loading;
