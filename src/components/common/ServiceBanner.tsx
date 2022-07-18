import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './ServiceBanner.scss';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { AutoPlay, Pagination } from '@egjs/flicking-plugins';
import FlickingPagination from './FlickingPagination';

const cx = classNames.bind(styles);

interface IOwnProps { };

const ServiceBanner: React.FC<IOwnProps> = ({ }) => {
  const videoRef_1 = useRef<HTMLVideoElement>(null);
  const videoRef_2 = useRef<HTMLVideoElement>(null);
  const videoRef_3 = useRef<HTMLVideoElement>(null);

  const videoElList = useRef<HTMLVideoElement[]>([]);

  const plugins = [new AutoPlay({ duration: 10000 }), new Pagination({ type: 'bullet' })];

  useEffect(() => {
    const videoEl_1 = videoRef_1.current;
    const videoEl_2 = videoRef_2.current;
    const videoEl_3 = videoRef_3.current;

    if (!videoEl_1 || !videoEl_2 || !videoEl_3 || !videoElList.current) {
      return;
    }

    videoElList.current = [videoEl_1, videoEl_2, videoEl_3];
  }, []);

  const onChanged = (event: any) => {
    const { index } = event;
    videoElList.current.forEach(videoEl => {
      videoEl.pause();
    });
    const targetVideo = videoElList.current[index];

    targetVideo.currentTime = 0;
    targetVideo.play();
  };

  const handleFlickingReady = () => {
    videoRef_1.current?.play();
  };

  return (
    <div className={cx('service_banner')}>
      <Flicking plugins={plugins} circular={true} onReady={handleFlickingReady} onChanged={onChanged} resizeOnContentsReady={true}>
        <div className={cx('banner_item')}>
          <video className={cx('idc_service_video')} src='https://firebasestorage.googleapis.com/v0/b/ep-api-file-ko/o/assets%2Fcommon%2Fvideo%2Fmain%2Ffuture_of_work.mp4?alt=media' muted={true} playsInline ref={videoRef_1} />
          <strong className={cx('idc_service_title')}>IDC Service1</strong>
          <strong className={cx('idc_service_sub_title')}>World Standard Data Center</strong>
          <a href='#' className={cx('idc_service_link')}>
            <span className={cx('pc_wrapper')}>자세히 알아보기</span>
            <img className={cx('idc_service_link_img')} src='/static/img/common/svg/btn_link.svg' />
          </a>
          <p className={cx('idc_service_text')}>대한민국 첫 데이터센터 가장 안전하며 대한민국을 넘어 세계 표준의 환경을 제공합니다</p>
        </div>
        <div className={cx('banner_item')}>
          <video className={cx('idc_service_video')} src='https://firebasestorage.googleapis.com/v0/b/ep-api-file-ko/o/assets%2Fcommon%2Fvideo%2Fmain%2Fclimate_change.mp4?alt=media' muted={true} playsInline ref={videoRef_2} />
          <strong className={cx('idc_service_title')}>IDC Service2</strong>
          <strong className={cx('idc_service_sub_title')}>World Standard Data Center</strong>
          <a href='#' className={cx('idc_service_link')}>
            <span className={cx('pc_wrapper')}>자세히 알아보기</span>
            <img className={cx('idc_service_link_img')} src='/static/img/common/svg/btn_link.svg' />
          </a>
          <p className={cx('idc_service_text')}>대한민국 첫 데이터센터 가장 안전하며 대한민국을 넘어 세계 표준의 환경을 제공합니다</p>
        </div>
        <div className={cx('banner_item')}>
          <video className={cx('idc_service_video')} src='https://firebasestorage.googleapis.com/v0/b/ep-api-file-ko/o/assets%2Fcommon%2Fvideo%2Fmain%2Feducation.mp4?alt=media' muted={true} playsInline ref={videoRef_3} />
          <strong className={cx('idc_service_title')}>IDC Service3</strong>
          <strong className={cx('idc_service_sub_title')}>World Standard Data Center</strong>
          <a href='#' className={cx('idc_service_link')}>
            <span className={cx('pc_wrapper')}>자세히 알아보기</span>
            <img className={cx('idc_service_link_img')} src='/static/img/common/svg/btn_link.svg' />
          </a>
          <p className={cx('idc_service_text')}>대한민국 첫 데이터센터 가장 안전하며 대한민국을 넘어 세계 표준의 환경을 제공합니다</p>
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

export default ServiceBanner;
