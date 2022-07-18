import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './MainBanner.scss';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { AutoPlay, Pagination } from '@egjs/flicking-plugins';
import FlickingPagination from './FlickingPagination';
import { useResize } from '@src/hooks/useResize';

const cx = classNames.bind(styles);

interface IOwnProps { };

const MainBanner: React.FC<IOwnProps> = ({ }) => {
  const bannerRef = useRef<HTMLDivElement>(null);

  const { height, isMobileSize } = useResize();
  const plugins = [new AutoPlay({ duration: 10000 }), new Pagination({ type: 'bullet' })];

  useEffect(() => {
    if (bannerRef.current && isMobileSize) {
      bannerRef.current.style.setProperty('--vh', (height * 0.01) + 'px');
    }
  }, []);


  return (
    <div className={cx('main_banner')} ref={bannerRef}>
      <Flicking plugins={plugins} circular={true} resizeOnContentsReady={true}>
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
            <div className={cx('background_pagenation_wrap')}>
              <FlickingPagination />
            </div>
          </div>
        </ViewportSlot>
      </Flicking >
    </div >
  );
};

export default MainBanner;
