import React from 'react';
import classNames from 'classnames/bind';
import styles from './FlickingPagination.scss';

const cx = classNames.bind(styles);

interface IOwnProps { };

const FlickingPagination: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('flicking-pagination')} />
  );
};

export default FlickingPagination;
