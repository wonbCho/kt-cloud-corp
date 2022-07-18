import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.scss';
import Foorter from '@src/components/common/Footer';
import Header from '@src/components/common/Header';
import CardItem from '@src/components/common/CardItem';
import Popup from '@src/components/common/Popup';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const Main: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('main')}>
      <Popup />
      <div className={cx('banner')}>
        <Header />
        <div className={cx('pc_wrapper')}>
          <img src='/static/img/pc/png/main.png' className={cx('banner_img')}></img>
        </div>
        <div className={cx('mobile_wrapper')}>
          <img src='/static/img/mobile/png/main.png' className={cx('banner_img')}></img>
        </div>
        <div className={cx('banner_wrap')}>
          <a className={cx('pc_wrapper', 'event_link')} href='#'>
            이벤트명
            <img className={cx('event_lmg')} src='/static/img/common/svg/btn-link.svg' />
          </a>
          <strong className={cx('banner_text_wrap')}>당신의 새로운 일상을 이어갑니다.</strong>
          <div className={cx('background_pagenation_wrap')}>
            <div className={cx('background_pagenation')} aria-selected="true"></div>
            <div className={cx('background_pagenation')} aria-selected="false"></div>
            <div className={cx('background_pagenation')} aria-selected="false"></div>
          </div>
        </div>
      </div>

      <div className={cx('connect_wrap')}>
        <strong className={cx('connect_text')}>Connect New Life</strong>
        <div className={cx('connect_area')}>
          <div className={cx('connect_img_wrap')}>
            <img className={cx('connect_img')} src='/static/img/common/png/info_banner_1.png'></img>
            <strong className={cx('connect_title')}>Ture Cloud</strong>
          </div>
          <div className={cx('connect_img_wrap')}>
            <img className={cx('connect_img')} src='/static/img/common/png/info_banner_2.png'></img>
            <strong className={cx('connect_title')}>Digital Transformation for all X</strong>
          </div>
          <div className={cx('connect_img_wrap')}>
            <img className={cx('connect_img')} src='/static/img/common/png/info_banner_3.png'></img>
            <strong className={cx('connect_title')}>Hyper AI Computing</strong>
          </div>
        </div>
        <div className={cx('kt_cloud_learn_wrap')}>
          <p className={cx('learn_text')}>
            새로운 일상으로의 연결,
            <br />
            KT Cloud로 일상의 디지털을 이어갑니다.
          </p>
          <div className={cx('mobile_wrapper')}>
            <a href='#' className={cx('learn_link')}>자세히 알아보기</a>
          </div>
        </div>
      </div>
      <div className={cx('idc_service_wrap')}>
        <img className={cx('pc_wrapper', 'idc_service_img')} src='/static/img/pc/png/stage.png'></img>
        <img className={cx('mobile_wrapper', 'idc_service_img')} src='/static/img/mobile/png/stage.png'></img>
        <strong className={cx('idc_service_title')}>IDC Service</strong>
        <strong className={cx('idc_service_sub_title')}>World Standard Data Center</strong>
        <a href='#' className={cx('idc_service_link')}>
          <span className={cx('pc_wrapper')}>자세히 알아보기</span>
          <img className={cx('idc_service_link_img')} src='/static/img/common/svg/btn-link.svg' />
        </a>
        <p className={cx('idc_service_text')}>대한민국 첫 데이터센터 가장 안전하며 대한민국을 넘어 세계 표준의 환경을 제공합니다</p>
        <div className={cx('background_pagenation_wrap')}>
          <div className={cx('background_pagenation')} aria-selected="true"></div>
          <div className={cx('background_pagenation')} aria-selected="false"></div>
          <div className={cx('background_pagenation')} aria-selected="false"></div>
        </div>
      </div>
      <div className={cx('main_contents_wrap')}>
        <strong className={cx('kt_cloud_news')}>
          KT Cloud가
          {' '}
          <br className={cx('mobile_wrapper')} />
          이룬 소식을 전합니다.
        </strong>
        <ul className={cx('news_wrap')}>
          <li className={cx('news_contents_wrap')}>
            <div className={cx('contents_wrap')}>
              <a className={cx('news_img_wrap')} href=''>
                <img className={cx('news_img')} src='/static/img/common/png/img1.png' />
              </a>
              <p className={cx('news_title')}>KT 클라우드, 출정식 개최…클라우드·IDC 역량 결집</p>
              <p className={cx('news_date')}>2022.06.08</p>
            </div>
          </li>
          <li className={cx('news_contents_wrap')}>
            <div className={cx('contents_wrap')}>
              <a className={cx('news_img_wrap')} href=''>
                <img className={cx('news_img')} src='/static/img/common/png/img2.png' />
              </a>
              <p className={cx('news_title')}>KT, 클라우드 생태계 상생 확대, 장터 입점 기업 수익 보전</p>
              <p className={cx('news_date')}>2022.06.08</p>
            </div>
          </li>
          <li className={cx('news_contents_wrap')}>
            <div className={cx('contents_wrap')}>
              <a className={cx('news_img_wrap')} href=''>
                <img className={cx('news_img')} src='/static/img/common/png/img3.png' />
              </a>
              <p className={cx('news_title')}>KT-틸론, DaaS 플랫폼 공동개발 MOU 체결</p>
              <p className={cx('news_date')}>2022.06.08</p>
            </div>
          </li>
          <li className={cx('news_contents_wrap')}>
            <div className={cx('contents_wrap')}>
              <a className={cx('news_img_wrap')} href=''>
                <img className={cx('news_img')} src='/static/img/common/png/img4.png' />
              </a>
              <p className={cx('news_title')}>KT, 소상공인시장진흥공단 클라우드 전환사업 수주</p>
              <p className={cx('news_date')}>2022.06.08</p>
            </div>
          </li>
          <li className={cx('news_contents_wrap')}>
            <div className={cx('contents_wrap')}>
              <a className={cx('news_img_wrap')} href=''>
                <img className={cx('news_img')} src='/static/img/common/png/img5.png' />
              </a>
              <p className={cx('news_title')}>개방형 공공 클라우드 KT 파스타, CSAP 획득</p>
              <p className={cx('news_date')}>2022.06.08</p>
            </div>
          </li>
          <li className={cx('news_contents_wrap')}>
            <div className={cx('contents_wrap')}>
              <a className={cx('news_img_wrap')} href=''>
                <img className={cx('news_img')} src='/static/img/common/png/img6.png' />
              </a>
              <p className={cx('news_title')}>KT 2분기 DX 선전 이끈 클라우드의 힘</p>
              <p className={cx('news_date')}>2022.06.08</p>
            </div>
          </li>
        </ul>
        <div className={cx('mobile_wrapper')}>
          <a href='#' className={cx('learn_link')}>자세히 알아보기</a>
        </div>
        <CardItem />
      </div>
      <Foorter />
    </div >
  );
};

export default Main;
