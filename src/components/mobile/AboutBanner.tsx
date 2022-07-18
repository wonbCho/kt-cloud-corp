import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './AboutBanner.scss';
import Flicking from '@egjs/react-flicking';

const cx = classNames.bind(styles);

interface IOwnProps { };

const AboutBanner: React.FC<IOwnProps> = ({ }) => {
  const flickingRef = useRef<Flicking>(null);
  const videoRef_1 = useRef<HTMLVideoElement>(null);
  const videoRef_2 = useRef<HTMLVideoElement>(null);
  const videoRef_3 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl_1 = videoRef_1.current;
    const videoEl_2 = videoRef_2.current;
    const videoEl_3 = videoRef_3.current;
    const flicking = flickingRef.current;

    if (!videoEl_1 || !videoEl_2 || !videoEl_3 || !flicking) {
      return;
    }

    videoEl_1.addEventListener('ended', () => {
      flicking.next();
      videoEl_2.play();
    });

    videoEl_2.addEventListener('ended', () => {
      flicking.next();
      videoEl_3.play();
    });

    videoEl_3.addEventListener('ended', () => {
      flicking.next();
      videoEl_1.play();
    });
  }, []);

  return (
    <div className={cx('about_banner')}>
      <strong className={cx('connect_text')}>Connect New Life</strong>
      <div className={cx('connect_area')}>
        <Flicking circular={true} ref={flickingRef} resizeOnContentsReady={true}>
          <div className={cx('connect_video_wrap')}>
            <video className={cx('connect_video')} src='https://firebasestorage.googleapis.com/v0/b/ep-api-file-ko/o/assets%2Fcommon%2Fvideo%2Fabout%2Fclimate_change.mp4?alt=media' muted={true} playsInline ref={videoRef_1} autoPlay />
            <strong className={cx('connect_title')}>Ture Cloud</strong>
          </div>
          <div className={cx('connect_video_wrap')}>
            <video className={cx('connect_video')} src='https://firebasestorage.googleapis.com/v0/b/ep-api-file-ko/o/assets%2Fcommon%2Fvideo%2Fabout%2Fwellness.mp4?alt=media' muted={true} playsInline ref={videoRef_2} />
            <strong className={cx('connect_title')}>Digital Transformation for all X</strong>
          </div>
          <div className={cx('connect_video_wrap')}>
            <video className={cx('connect_video')} src='https://firebasestorage.googleapis.com/v0/b/ep-api-file-ko/o/assets%2Fcommon%2Fvideo%2Fabout%2Feducation.mp4?alt=media' muted={true} playsInline ref={videoRef_3} />
            <strong className={cx('connect_title')}>Hyper AI Computing</strong>
          </div>
        </Flicking>
      </div>
      <div className={cx('kt_cloud_learn_wrap')}>
        <p className={cx('learn_text')}>
          새로운 일상으로의 연결,
          <br />
          KT Cloud로 일상의 디지털을 이어갑니다.
        </p>
        <a href='#' className={cx('learn_link')}>자세히 알아보기</a>
      </div>
    </div>
  );
};

export default AboutBanner;
