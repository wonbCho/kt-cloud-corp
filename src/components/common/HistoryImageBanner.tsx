import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './HistoryImageBanner.scss';
import useGSAP from '@src/hooks/useGSAP';

const cx = classNames.bind(styles);

interface IOwnProps {
  imageUrl: string;
  year: string;
  title: string;
  text: string;
};

const HistoryImageBanner: React.FC<IOwnProps> = ({ imageUrl, year, title, text }) => {
  const { gsap, ScrollTrigger, getGSAPQuerySelector } = useGSAP();
  const imageBannerRef_1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGSAP = () => {
      const tl = gsap.timeline({ paused: true });
      const imageBanner_1 = imageBannerRef_1.current;

      if (!imageBanner_1) {
        return;
      }

      tl
        .from(imageBanner_1.querySelector(getGSAPQuerySelector('image-banner')), {
          delay: 0.2,
          duration: 0.6,
          opacity: 0,
          y: 30,
          ease: 'power1.out',
        })
        .from(imageBanner_1.querySelector(getGSAPQuerySelector('image-banner-text-1')),
          {
            duration: 0.6,
            opacity: 0,
            y: '70%',
            ease: 'power1.out',
          },
          '-=0.4'
        )
        .from(imageBanner_1.querySelector(getGSAPQuerySelector('image-banner-text-2')),
          {
            duration: 0.6,
            opacity: 0,
            y: '70%',
            ease: 'power1.out',
          },
          '-=0.4'
        )
        .from(imageBanner_1.querySelector(getGSAPQuerySelector('image-banner-text-3')),
          {
            duration: 0.6,
            opacity: 0,
            y: '70%',
            ease: 'power1.out',
          },
          '-=0.4'
        );

      ScrollTrigger.create({
        trigger: imageBanner_1,
        once: true,
        start: 'top 70%',
        onEnter: () => {
          tl.play();
        },
      });
    };

    initGSAP();
  }, []);

  return (
    <div className={cx('history_image_banner')} ref={imageBannerRef_1}>
      <div className={cx('inner')}>
        <div className={cx('thumb')} data-gsap="image-banner">
          <img src={imageUrl} alt="" className={cx('image')} />
        </div>
        <div className={cx('main_text')}>
          <strong className={cx('title')} data-gsap="image-banner-text-1">{year}</strong>
          <strong className={cx('text')} data-gsap="image-banner-text-2">{title}</strong>
        </div>
        <p className={cx('sub_text')} data-gsap="image-banner-text-3">{text}</p>
      </div>
    </div>
  );
};

export default HistoryImageBanner;
