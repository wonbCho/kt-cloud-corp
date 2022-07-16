import React from 'react';
import classNames from 'classnames/bind';
import styles from './IntroduceLocation.scss';
import IntroduceBanner from '@src/components/common/IntroduceBanner';
import Footer from '@src/components/common/Footer';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroduceLocation: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('introducelocation')}>
      <IntroduceBanner title='위치' />
      <div className={cx('contents_wrap')}>
        <div className={cx('map_wrap')}></div>
        <strong className={cx('map_title')}>오시는 길</strong>

        <div className={cx('info_wrap')}>
          <div className={cx('list_wrap')}>
            <div className={cx('pc_wrapper')}>
              <strong className={cx('info_list_title')}>본사 주소 및 고객센터</strong>
            </div>
            <ul className={cx('info_list_wrap')}>
              <li className={cx('info_list')}>
                <strong className={cx('info_title')}>본사 주소</strong>
                <span className={cx('info')}>서울특별시 강남구 학동로 343 (논현동, 더피나클강남) 15층</span>
              </li>
              <li className={cx('info_list')}>
                <strong className={cx('info_title')}>고객센터</strong>
                <span className={cx('info')}>080-2580-005</span>
              </li>
            </ul>
          </div>
          <div className={cx('list_wrap')}>
            <strong className={cx('info_list_title', 'idc_title')}>IDC 위치</strong>
            <ul className={cx('info_list_wrap')}>
              <li className={cx('info_list')}>
                <strong className={cx('info_title')}>용산 IDC</strong>
                <span className={cx('info')}>서울특별시 강남구 학동로 343 (논현동, 더피나클강남) 15층</span>
              </li>
              <li className={cx('info_list')}>
                <strong className={cx('info_title')}>가산 IDC</strong>
                <span className={cx('info')}>서울특별시 강남구 학동로 343 (논현동, 더피나클강남) 15층</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IntroduceLocation;
