import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popup.scss';

const cx = classNames.bind(styles);

interface IOwnProps { };

const Popup: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('popup')}>
      <div className={cx('page_wrap')}>
        <div className={cx('popup_img_wrap')}>
          <a className={cx('popup_img_link')} href='#'>
            <img className={cx('popup_img')} src="https://firebasestorage.googleapis.com/v0/b/ep-api-file-ko/o/popups%2F20220307%2F20220307200319479_2.%20720x1024px_%E1%84%92%E1%85%A1%E1%86%AB%E1%84%80%E1%85%B3%E1%86%AF%E1%84%87%E1%85%A5%E1%84%90%E1%85%B3%E1%86%AB.jpg?alt=media" />
          </a>
        </div>
        <div className={cx('close_wrap')}>
          <span className={cx('close_text')}>오늘 하루 보지 않기</span>
          <button>
            <span className={cx('pc_wrapper', 'close_text')}>팝업닫기</span>
            <img className={cx('close_img')} src='/assets/img/common/svg/white_close.svg' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
