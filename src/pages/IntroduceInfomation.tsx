import React from 'react';
import classNames from 'classnames/bind';
import styles from './IntroduceInfomation.scss';
import Header from '@src/components/common/Header';
import Footer from '@src/components/common/Footer';
import IntroduceBanner from '@src/components/common/IntroduceBanner';


interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroduceInfomation: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('introduceinfomation')}>
      <IntroduceBanner title='회사 정보' />
      <div className={cx('contents_wrap')}>

        <div className={cx('corp_info_wrap')}>
          <strong className={cx('info_list_title')}>회사 일반 사항</strong>
          <ul className={cx('info_list_wrap')}>
            <li className={cx('info_list')}>
              <strong className={cx('info_title')}>대표이사</strong>
              <span className={cx('info')}>윤동식</span>
            </li>
            <li className={cx('info_list')}>
              <strong className={cx('info_title')}>본사 주소</strong>
              <span className={cx('info')}>서울특별시 강남구 학동로 343 (논현동, 더피나클강남) 15층</span>
            </li>
            <li className={cx('info_list')}>
              <strong className={cx('info_title')}>종사자 수</strong>
              <span className={cx('info')}>(22년 4월 기준) 350명</span>
            </li>
            <li className={cx('info_list')}>
              <strong className={cx('info_title')}>자본금</strong>
              <span className={cx('info')}>(22년 4월 기준) 89억원</span>
            </li>
            <li className={cx('info_list')}>
              <strong className={cx('info_title')}>섭립 일자</strong>
              <span className={cx('info')}>2022.04.01</span>
            </li>
          </ul>
          <strong className={cx('info_list_title')}>서비스 사항</strong>
          <ul className={cx('info_list_wrap')}>
            <li className={cx('info_list')}>
              <strong className={cx('info_title')}>주력 사업 분야</strong>
              <span className={cx('info')}>Cloud 서비스, IDC 사업 전 분야 </span>
            </li>
            <li className={cx('info_list')}>
              <strong className={cx('info_title')}>제공 서비스</strong>
              <span className={cx('info')}>
                공공클라우드
                <br className={cx('mobile_wrapper')} />
                <span className={cx('pc_wrapper')}>, </span>
                하이퍼스케일 AI 컴퓨팅
                <br className={cx('mobile_wrapper')} />
                <span className={cx('pc_wrapper')}>, </span>
                금융클라우드
                <br className={cx('mobile_wrapper')} />
                <span className={cx('pc_wrapper')}>, </span>
                DX Platform
                <br className={cx('mobile_wrapper')} />
                <span className={cx('pc_wrapper')}>, </span>
                IDC 코로케이션
                <br className={cx('mobile_wrapper')} />
                <span className={cx('pc_wrapper')}>, </span>
                IDC DBO(설계/구축/운영)
                <br className={cx('mobile_wrapper')} />
                <span className={cx('pc_wrapper')}>, </span>
                IDC MSP 등
              </span>
            </li>
          </ul>
        </div>

        <div className={cx('corp_info_down_wrap')}>
          <div className={cx('corp_down_wrap')}>
            <strong className={cx('info_title')}>회사 소개서</strong>
            <img className={cx('down_img')} src='/static/img/common/png/crop_down_1.png' />
            <div className={cx('down_link_wrap')}>
              <a className={cx('down_link')}>
                PDF 다운로드
                <img className={cx('down_link_img')} src='/static/img/common/svg/front-link.svg' />
              </a>
            </div>
          </div>
          <div className={cx('corp_down_wrap')}>
            <strong className={cx('info_title')}>kt cloud CI 사용 가이드</strong>
            <img className={cx('down_img')} src='/static/img/common/png/crop_down_2.png' />
            <div className={cx('down_link_wrap')}>
              <a className={cx('down_link')}>
                가이드 PDF 다운로드
                <img className={cx('down_link_img')} src='/static/img/common/svg/front-link.svg' />
              </a>
              <a className={cx('down_link')}>
                AI 다운로드
                <img className={cx('down_link_img')} src='/static/img/common/svg/front-link.svg' />
              </a>
            </div>
          </div>
        </div>
        <div className={cx('map_wrap')}>
          <div className={cx('pc_wrapper')}>
            <strong className={cx('map_title')}>오시는 길</strong>
          </div>
          <div className={cx('map')}></div>
          <div className={cx('mobile_wrapper')}>
            <strong className={cx('map_title')}>오시는 길</strong>
          </div>
          <div className={cx('map_info_wrap')}>
            <div className={cx('list_wrap')}>
              <div className={cx('pc_wrapper')}>
                <strong className={cx('info_list_title')}>본사 주소 및 고객센터</strong>
              </div>
              <ul className={cx('info_list_wrap')}>
                <li className={cx('info_list')}>
                  <strong className={cx('info_title')}>본사 주소</strong>
                  <span className={cx('info')}>서울특별시 강남구 학동로 343 (논현동, 더피나클강남) 15층</span>
                </li>
                <li className={cx('info_list')}>
                  <strong className={cx('info_title')}>고객센터</strong>
                  <span className={cx('info')}>080-2580-005</span>
                </li>
              </ul>
            </div>
            <div className={cx('list_wrap')}>
              <strong className={cx('info_list_title', 'idc_title')}>IDC 위치</strong>
              <ul className={cx('info_list_wrap')}>
                <li className={cx('info_list')}>
                  <strong className={cx('info_title')}>용산 IDC</strong>
                  <span className={cx('info')}>서울특별시 강남구 학동로 343 (논현동, 더피나클강남) 15층</span>
                </li>
                <li className={cx('info_list')}>
                  <strong className={cx('info_title')}>가산 IDC</strong>
                  <span className={cx('info')}>서울특별시 강남구 학동로 343 (논현동, 더피나클강남) 15층</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IntroduceInfomation;
