import React from 'react';
import classNames from 'classnames/bind';

import styles from './GNB.scss';
const cx = classNames.bind(styles);

interface IOwnProps {
}

const GNB: React.FC<IOwnProps> = ({

}) => {
  return (
    <div className={cx('gnb')}>GNB</div>
  );
};

export default GNB;
