import React from 'react';
import classNames from 'classnames/bind';
import styles from './MainBanner.scss';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { AutoPlay, Pagination } from '@egjs/flicking-plugins';

const cx = classNames.bind(styles);

interface IOwnProps { };

const MainBanner: React.FC<IOwnProps> = ({ }) => {
  const plugins = [new AutoPlay({ duration: 10000 }), new Pagination({ type: 'bullet' })];

  return (
    <div className={cx('main_banner')}>
      <Flicking plugins={plugins} circular={true}>
        <div className={cx('banner_item')}>
          <img src='/static/img/common/png/main_1.png' className={cx('banner_img')} />
          <div className={cx('content_wrap')}>
            <div className={cx('banner_wrap')}>
              <p className={cx('banner_text_wrap')}>
                당신의 새로운 일상을
                <br />
                이어갑니다.
              </p>
            </div>
          </div>
        </div>
        <div className={cx('banner_item')}>
          <img src='/static/img/common/png/main_2.png' className={cx('banner_img')} />
          <div className={cx('content_wrap')}>
            <div className={cx('banner_wrap')}>
              <a className={cx('event_link')} href='#'>
                이벤트명
              </a>
              <p className={cx('banner_text_wrap')}>
                당신의 새로운 일상을
                <br />
                이어갑니다.
              </p>
            </div>
          </div>
        </div>
        <div className={cx('banner_item', 'color_black')}>
          <img src='/static/img/common/png/main_3.png' className={cx('banner_img')} />
          <div className={cx('content_wrap')}>
            <div className={cx('banner_wrap')}>
              <a className={cx('event_link')} href='#'>
                이벤트명
              </a>
              <p className={cx('banner_text_wrap')}>
                당신의 새로운 일상을
                <br />
                이어갑니다.
              </p>
              <p className={cx('description')}>
                새로운 세상으로 연결
                <br />
                KT Cloud로 일상의 디지털을 이어갑니다
              </p>
            </div>
          </div>
        </div>
        <ViewportSlot>
          <div className={cx('mobile_wrapper')}>
            <div className={cx('background_pagenation_wrap', 'flicking-pagination')}></div>
          </div>
        </ViewportSlot>
      </Flicking >
    </div >
  );
};

export default MainBanner;
