import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './AboutBanner.scss';

const cx = classNames.bind(styles);

interface IOwnProps { };

const AboutBanner: React.FC<IOwnProps> = ({ }) => {
  const videoRef_1 = useRef<HTMLVideoElement>(null);
  const videoRef_2 = useRef<HTMLVideoElement>(null);
  const videoRef_3 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl_1 = videoRef_1.current;
    const videoEl_2 = videoRef_2.current;
    const videoEl_3 = videoRef_3.current;

    if (!videoEl_1 || !videoEl_2 || !videoEl_3) {
      return;
    }

    videoEl_1.addEventListener('mouseover', () => {
      videoEl_1.play();
    });

    videoEl_1.addEventListener('mouseout', () => {
      videoEl_1.pause();
      videoEl_1.currentTime = 0;
    });

    videoEl_2.addEventListener('mouseover', () => {
      videoEl_2.play();
    });

    videoEl_2.addEventListener('mouseout', () => {
      videoEl_2.pause();
      videoEl_2.currentTime = 0;
    });

    videoEl_3.addEventListener('mouseover', () => {
      videoEl_3.play();
    });

    videoEl_3.addEventListener('mouseout', () => {
      videoEl_3.pause();
      videoEl_3.currentTime = 0;
    });
  }, []);

  return (
    <div className={cx('about_banner')}>
      <strong className={cx('connect_text')}>Connect New Life</strong>
      <div className={cx('connect_area')}>
        <div className={cx('connect_video_wrap')}>
          <video className={cx('connect_video')} src='https://firebasestorage.googleapis.com/v0/b/ep-api-file-ko/o/assets%2Fcommon%2Fvideo%2Fabout%2Fclimate_change.mp4?alt=media' muted={true} playsInline ref={videoRef_1} />
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
      </div>
      <div className={cx('kt_cloud_learn_wrap')}>
        <p className={cx('learn_text')}>
          새로운 일상으로의 연결,
          <br />
          KT Cloud로 일상의 디지털을 이어갑니다.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
