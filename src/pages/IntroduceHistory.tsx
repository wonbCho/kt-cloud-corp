import React from 'react';
import classNames from 'classnames/bind';
import styles from './IntroduceHistory.scss';
import IntroduceBanner from '@src/components/common/IntroduceBanner';
import Footer from '@src/components/common/Footer';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroduceHistory: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={cx('introduce_history')}>
        <IntroduceBanner title='연혁' />
        <div className={cx('history_content')}>
          <div className={cx('mobile_wrapper', 'm_sticky_area')}>
            <strong className={cx('title')}>2001 ~</strong>
            <p className={cx('text')}>대한민국 클라우드 서비스 역사의 한 획</p>
          </div>
          <ul className={cx('pc_wrapper', 'sticky_area')}>
            <li className={cx('list')} aria-selected={true}>
              <strong className={cx('title')}>2001 ~</strong>
              <p className={cx('text')}>대한민국 IDC의 시작</p>
            </li>
            <li className={cx('list')} aria-selected={false}>
              <strong className={cx('title')}>2010 ~</strong>
              <p className={cx('text')}>대한민국 클라우드 서비스 역사의 한 획</p>
            </li>
            <li className={cx('list')} aria-selected={false}>
              <strong className={cx('title')}>Now</strong>
              <p className={cx('text')}>더 나은 일상을 만드는 지금</p>
            </li>
          </ul>
          <ul className={cx('content_1')}>
            <li className={cx('list')}>
              <div className={cx('text_area')}>
                <span className={cx('year')}>2001</span>
                <span className={cx('location')}>분당 IDC 개소</span>
              </div>
              <div className={cx('thumb')}>
                <img src="/assets/img/common/png/history_image_1.png" alt="" className={cx('image')} />
              </div>
            </li>
            <li className={cx('list')}>
              <div className={cx('text_area')}>
                <span className={cx('year')}>2008</span>
                <span className={cx('location')}>목동1 IDC 개소</span>
              </div>
              <div className={cx('thumb')}>
                <img src="/assets/img/common/png/history_image_6.png" alt="" className={cx('image')} />
              </div>
            </li>
          </ul>
          <ul className={cx('content_2')}>
            <li className={cx('list')}>
              <div className={cx('thumb')}>
                <img src="/assets/img/common/png/history_image_2.png" alt="" className={cx('image')} />
              </div>
              <div className={cx('main_text')}>
                <strong className={cx('title')}>2010</strong>
                <strong className={cx('text')}>국내 최초 클라우드 서비스 시작</strong>
              </div>
              <p className={cx('sub_text')}>국내 최초 퍼블릭 클라우드 1호 인증</p>
            </li>
            <li className={cx('list')}>
              <div className={cx('thumb')}>
                <img src="/assets/img/common/png/history_image_3.png" alt="" className={cx('image')} />
              </div>
              <div className={cx('main_text')}>
                <strong className={cx('title')}>2011</strong>
                <strong className={cx('text')}>국내 최초 클라우드 전용 데이터센터 개소</strong>
              </div>
              <p className={cx('sub_text')}>천안 IDC</p>
            </li>
          </ul>
          <ul className={cx('content_3')}>
            <li className={cx('list')}>
              <span className={cx('year')}>2008</span>
              <p className={cx('mobile_wrapper', 'location')}>목동1 IDC 개소</p>
              <div className={cx('thumb_area')}>
                <div className={cx('thumb')}>
                  <img src="/assets/img/common/png/history_image_4.png" alt="" className={cx('image')} />
                  <p className={cx('pc_wrapper', 'thumb_location')}>여의도 IDC 개소</p>
                </div>
                <div className={cx('thumb')}>
                  <img src="/assets/img/common/png/history_image_5.png" alt="" className={cx('image')} />
                  <p className={cx('pc_wrapper', 'thumb_location')}>공공 Cloud 서비스 출시</p>
                </div>
              </div>
            </li>
            <li className={cx('list')}>
              <span className={cx('year')}>2008</span>
              <p className={cx('mobile_wrapper', 'location')}>목동1 IDC 개소</p>
              <div className={cx('thumb_area')}>
                <div className={cx('thumb')}>
                  <img src="/assets/img/common/png/history_image_4.png" alt="" className={cx('image')} />
                  <p className={cx('pc_wrapper', 'thumb_location')}>목동2 IDC 개소</p>
                </div>
                <div className={cx('thumb')}>
                  <img src="/assets/img/common/png/history_image_5.png" alt="" className={cx('image')} />
                  <p className={cx('pc_wrapper', 'thumb_location')}>국내최초 ‘클라우드 컴퓨팅 보안인증’ 획득 </p>
                </div>
              </div>
            </li>
          </ul>
          <ul className={cx('content_1')}>
            <li className={cx('list')}>
              <div className={cx('text_area')}>
                <span className={cx('year')}>2017</span>
                <span className={cx('location')}>기업전용 Cloud, 금융특화 PSD 서비스 출시</span>
              </div>
              <div className={cx('thumb')}>
                <img src="/assets/img/common/png/history_image_1.png" alt="" className={cx('image')} />
              </div>
            </li>
            <li className={cx('list')}>
              <div className={cx('text_area')}>
                <span className={cx('year')}>2018</span>
                <span className={cx('location')}>VMware Cloud 서비스 출시</span>
              </div>
              <div className={cx('thumb')}>
                <img src="/assets/img/common/png/history_image_6.png" alt="" className={cx('image')} />
              </div>
            </li>
            <li className={cx('list')}>
              <div className={cx('text_area')}>
                <span className={cx('year')}>2019</span>
                <span className={cx('location')}>금융 Cloud, 5G Edge Cloud 서비스 출시</span>
              </div>
              <div className={cx('thumb')}>
                <img src="/assets/img/common/png/history_image_6.png" alt="" className={cx('image')} />
              </div>
            </li>
            <li className={cx('list')}>
              <div className={cx('text_area')}>
                <span className={cx('year')}>2020</span>
                <span className={cx('location')}>용산 IDC 개소, DX Platform 출시</span>
              </div>
              <div className={cx('thumb')}>
                <img src="/assets/img/common/png/history_image_6.png" alt="" className={cx('image')} />
              </div>
            </li>
          </ul>
          <ul className={cx('content_2')}>
            <li className={cx('list')}>
              <div className={cx('thumb')}>
                <img src="/assets/img/common/png/history_image_2.png" alt="" className={cx('image')} />
              </div>
              <div className={cx('main_text')}>
                <strong className={cx('title')}>2021</strong>
                <strong className={cx('text')}>더 나은 일상을 만들기 위한 지금</strong>
              </div>
              <p className={cx('sub_text')}>
                세계최초 ‘하이퍼스케일 AI 컴퓨팅(HAC)’ 서비스 출시 공공 SaaS(KT Bizworks) 출시
              </p>
            </li>
            <li className={cx('list')}>
              <div className={cx('thumb')}>
                <img src="/assets/img/common/png/history_image_3.png" alt="" className={cx('image')} />
              </div>
              <div className={cx('main_text')}>
                <strong className={cx('title')}>2011</strong>
                <strong className={cx('text')}>국내 최초 클라우드 전용 데이터센터 개소</strong>
              </div>
              <p className={cx('sub_text')}>천안 IDC</p>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default IntroduceHistory;
