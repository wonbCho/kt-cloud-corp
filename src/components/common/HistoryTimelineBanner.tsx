import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './HistoryTimelineBanner.scss';
import useGSAP from '@src/hooks/useGSAP';

const cx = classNames.bind(styles);

interface IOwnProps {
  imageUrl: string;
  year?: string;
  text: string;
  sub_title?: string;
  isMain?: boolean;
};

const HistoryTimelineBanner: React.FC<IOwnProps> = ({ year, text, imageUrl, sub_title, isMain }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { gsap, ScrollTrigger, getGSAPQuerySelector } = useGSAP();

  useEffect(() => {
    const initGSAP = () => {
      const tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 1,
          opacity: 0,
          ease: 'power3.out',
        },
      });

      const containerEl = containerRef.current;

      if (!containerEl) {
        return;
      }

      tl
        .from(containerEl.querySelector(getGSAPQuerySelector('text-1')), {
          y: '70%',
        }, '-=0.4')
        .from(containerEl.querySelector(getGSAPQuerySelector('text-2')), {
          y: '70%',
        }, '-=0.4')
        .from(containerEl.querySelector(getGSAPQuerySelector('text-3')), {
          y: '70%',
        }, '-=0.4')
        .from(containerEl.querySelector(getGSAPQuerySelector('thumbnail')), {
          duration: 1,
          opacity: 0,
          x: -30,
        }, '-=0.4');



      ScrollTrigger.create({
        trigger: containerEl,
        once: true,
        start: 'top 100%',
        onEnter: () => {
          tl.play();
        },
      });
    };

    initGSAP();
  }, []);

  return (
    <div className={cx('history_timeline_banner', isMain && 'is_main')} ref={containerRef}>
      <div className={cx('text_area')}>
        {year && (
          <div className={cx('year')} data-gsap="text-1">{year}</div>
        )}
        {sub_title && (
          <p className={cx('sub_title')} data-gsap="text-2">{sub_title}</p>
        )}
        <p className={cx('text')} data-gsap="text-3">{text}</p>
      </div>
      <div className={cx('thumb')} data-gsap="thumbnail">
        <img src={imageUrl} alt="" className={cx('image')} />
      </div>
    </div>
  );
};

export default HistoryTimelineBanner;
