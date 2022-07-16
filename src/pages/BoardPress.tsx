import React from 'react';
import classNames from 'classnames/bind';
import styles from './BoardPress.scss';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const BoardPress: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('boardpress')}>BoardPress</div>
  );
};

export default BoardPress;
