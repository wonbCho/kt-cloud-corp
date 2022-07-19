import React from 'react';
import classNames from 'classnames/bind';
import styles from './HistoryTwinBanner.scss';

const cx = classNames.bind(styles);

interface IOwnProps {
  year: string;
  title: string;
  description: string;
  imageURL_1: string;
  imageURL_2: string;
};

const HistoryTwinBanner: React.FC<IOwnProps> = ({ year, title, description, imageURL_1, imageURL_2 }) => {
  return (
    <div className={cx('history_twin_Banner')}>
      <div className={cx('text_area')}>
        <span className={cx('year')}>{year}</span>
        <div className={cx('text_content')}>
          <strong className={cx('title')}>{title}</strong>
          <p className={cx('description')} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
      <div className={cx('thumb_area')}>
        <div className={cx('thumb')}>
          <img src={imageURL_1} alt="" className={cx('image')} />
        </div>
        <div className={cx('thumb')}>
          <img src={imageURL_2} alt="" className={cx('image')} />
        </div>
      </div>
    </div>
  );
};

export default HistoryTwinBanner;
