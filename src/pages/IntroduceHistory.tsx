import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './IntroduceHistory.scss';
import IntroduceBanner from '@src/components/common/IntroduceBanner';
import Footer from '@src/components/common/Footer';
import ScrollUtil from '@src/utils/ScrollUtil';
import useGSAP from '@src/hooks/useGSAP';
import HistoryImageBanner from '@src/components/common/HistoryImageBanner';
import HistoryTimelineBanner from '@src/components/common/HistoryTimelineBanner';
import HistoryTwinBanner from '@src/components/common/HistoryTwinBanner';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroduceHistory: React.FC<IOwnProps> = ({ }) => {
  const { gsap, SplitText, ScrollTrigger, getGSAPQuerySelector } = useGSAP();
  const stickyRef = useRef<HTMLDivElement>(null);
  const historyRef_1 = useRef<HTMLUListElement>(null);
  const historyRef_2 = useRef<HTMLUListElement>(null);
  const historyRef_3 = useRef<HTMLUListElement>(null);

  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [historyRefList, setHistoryRefList] = useState<HTMLUListElement[]>([]);
  const [historybar_1, setHistoryBar_1] = useState<boolean>(false);
  const [historybar_2, setHistoryBar_2] = useState<boolean>(false);
  const [historybar_3, setHistoryBar_3] = useState<boolean>(false);

  useEffect(() => {
    const historyEl_1 = historyRef_1.current;
    const historyEl_2 = historyRef_2.current;
    const historyEl_3 = historyRef_3.current;

    if (!historyEl_1 || !historyEl_2 || !historyEl_3) {
      return;
    }

    setHistoryRefList([historyEl_1, historyEl_2, historyEl_3]);

    const onScroll = () => {
      const scrollY = ScrollUtil.getCurrentScrollTop();
      const stickyRefHeight = stickyRef?.current?.getBoundingClientRect().height || 0;
      const offset = 50;
      const historyTop_1 = historyEl_1?.getBoundingClientRect().top || 0;
      const historyTop_2 = historyEl_2?.getBoundingClientRect().top || 0;
      const historyTop_3 = historyEl_3?.getBoundingClientRect().top || 0;

      setIsFixed(scrollY > historyTop_1);
      setHistoryBar_1(historyTop_1 < stickyRefHeight + offset);
      setHistoryBar_2(historyTop_2 < stickyRefHeight + offset);
      setHistoryBar_3(historyTop_3 < stickyRefHeight + offset);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleClickSticky = (index: number) => {
    const stickyRefHeight = stickyRef?.current?.getBoundingClientRect().height || 0;
    const target = historyRefList[index];

    ScrollUtil.moveTo(target, true, stickyRefHeight);
  };

  return (
    <>
      <div className={cx('introduce_history')}>
        <IntroduceBanner title='연혁' />
        <div className={cx('history_content')}>
          <div className={cx('sticky_area', isFixed && 'fixed')} ref={stickyRef}>
            <ul className={cx('list_set')}>
              <li className={cx('list')} aria-selected={historybar_1}>
                <button type="button" className={cx('btn')} onClick={() => handleClickSticky(0)}>
                  <strong className={cx('title')}>2001 ~</strong>
                  <p className={cx('pc_wrapper', 'text')}>대한민국 IDC의 시작</p>
                </button>
              </li>
              <li className={cx('list')} aria-selected={historybar_2}>
                <button type="button" className={cx('btn')} onClick={() => handleClickSticky(1)}>
                  <strong className={cx('title')}>2010 ~</strong>
                  <p className={cx('pc_wrapper', 'text')}>대한민국 클라우드 서비스 역사의 한 획</p>
                </button>
              </li>
              <li className={cx('list')} aria-selected={historybar_3}>
                <button type="button" className={cx('btn')} onClick={() => handleClickSticky(2)}>
                  <strong className={cx('title')}>Now</strong>
                  <p className={cx('pc_wrapper', 'text')}>더 나은 일상을 만드는 지금</p>
                </button>
              </li>
            </ul>
          </div>
          <ul className={cx('content_1')} ref={historyRef_1}>
            <li className={cx('list')}>
              <HistoryTimelineBanner imageUrl="/static/img/common/png/history_image_1.png" text="분당 IDC 개소" isMain={true} sub_title={'대한민국 IDC의 시작'} year="2001" />
            </li>
            <li className={cx('list')}>
              <HistoryTimelineBanner imageUrl="/static/img/common/png/history_image_1.png" year="2008" text="목동1 IDC 개소" />
            </li>
          </ul>
          <ul className={cx('content_2')} ref={historyRef_2}>
            <li className={cx('list')}>
              <HistoryImageBanner imageUrl="/static/img/common/png/history_image_2.png" year="2010" title="내 최초 클라우드 서비스 시작" text="국내 최초 퍼블릭 클라우드 1호 인증" />
            </li>
            <li className={cx('list')}>
              <HistoryImageBanner imageUrl="/static/img/common/png/history_image_3.png" year="2011" title="국내 최초 클라우드 전용 데이터센터 개소" text="천안 IDC" />
            </li>
          </ul>
          <ul className={cx('content_3')}>
            <li className={cx('list')}>
              <HistoryTwinBanner year="2015" title="여의도 IDC 개소" description="공공 cloud 서비스 출시" imageURL_1="/static/img/common/png/history_image_4.png" imageURL_2="/static/img/common/png/history_image_5.png" />
            </li>
            <li className={cx('list')}>
              <HistoryTwinBanner year="2015"
                title="목동2 IDC 개소"
                description="국내최초 <br/>‘클라우드 컴퓨팅 보안인증’ 획득"
                imageURL_1="/static/img/common/png/history_image_4.png"
                imageURL_2="/static/img/common/png/history_image_5.png"
              />
            </li>
          </ul>
          <ul className={cx('content_1')}>
            <li className={cx('list')}>
              <HistoryTimelineBanner imageUrl="/static/img/common/png/history_image_1.png" year="2017" text="기업전용 Cloud, 금융특화 PSD 서비스 출시" />
            </li>
            <li className={cx('list')}>
              <HistoryTimelineBanner imageUrl="/static/img/common/png/history_image_1.png" year="2018" text="VMware Cloud 서비스 출시" />
            </li>
            <li className={cx('list')}>
              <HistoryTimelineBanner imageUrl="/static/img/common/png/history_image_1.png" year="2019" text="금융 Cloud,5G Edge Cloud 서비스" />
            </li>
            <li className={cx('list')}>
              <HistoryTimelineBanner imageUrl="/static/img/common/png/history_image_1.png" year="2020" text="금융 Cloud, 5G Edge Cloud 서비스 출시" />
            </li>
          </ul>
          <ul className={cx('content_2')} ref={historyRef_3}>
            <li className={cx('list')}>
              <HistoryImageBanner imageUrl="/static/img/common/png/history_image_2.png" year="2021" title="세계최초 ‘하이퍼스케일 AI 컴퓨팅(HAC)’ 서비스 출시 공공 SaaS(KT Bizworks) 출시" text="더 나은 일상을 만들기 위한 지금" />
            </li>
          </ul>
        </div>
        <Footer />
      </div >
    </>
  );
};

export default IntroduceHistory;
