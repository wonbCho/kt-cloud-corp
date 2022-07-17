import React from 'react';
import classNames from 'classnames/bind';
import styles from './NotFound.scss';
import Header from '@src/components/common/Header';
import Footer from '@src/components/common/Footer';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const NotFound: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('notfound')}>
      <Header />
      <div className={cx('page_wrap')}>
        <strong className={cx('error_title')}>404 Error</strong>
        <strong className={cx('error_msg_en')}>
          Page
          <br className={cx('mobile_wrapper')} />
          Not Found
        </strong>
        <strong className={cx('error_msg_kr')}>
          페이지를 찾을 수 없거나,
          <br className={cx('mobile_wrapper')} />
          주소가 변경이 되었을 수 있습니다.
        </strong>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
