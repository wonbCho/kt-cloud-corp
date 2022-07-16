import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.scss';
import MobileHeader from '@src/components/mobile/Header';
import PCHeader from '@src/components/pc/Header';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const Main: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('main')}>
      <div className={cx('header')}>
        <div className={cx('pc_wrapper')}>
          <PCHeader />
        </div>
        <div className={cx('`mobile_wrapper`')}>
          <MobileHeader />
        </div>

      </div>
      <div className={cx('connect_wrap')}>
        <strong className={cx('connect_text')}>Connect New Life</strong>
        <div className={cx('connect_area')}>
          <div className={cx('connect_img_wrap')}>
            <img className={cx('connect_img')} src='/assets/img/common/png/rectangle-9.png'></img>
            <strong className={cx('connect_title')}>Ture Cloud</strong>
          </div>
          <div className={cx('connect_img_wrap')}>
            <img className={cx('connect_img')} src='/assets/img/common/png/rectangle-10.png'></img>
            <strong className={cx('connect_title')}>Digital Transformation for all X</strong>
          </div>
          <div className={cx('connect_img_wrap')}>
            <img className={cx('connect_img')} src='/assets/img/common/png/rectangle-11.png'></img>
            <strong className={cx('connect_title')}>Hyper AI Computing</strong>
          </div>
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
      <div className={cx('idc_service_wrap')}>
        <img src='/assets/img/mobile/png/stage.png' className={cx('idc_service_img')}></img>
        <strong className={cx('idc_service_title')}>IDC Service</strong>
        <strong className={cx('idc_service_sub_title')}>World Standard Data Center</strong>
        <a href='#' className={cx('idc_service_link')}>
          <img src='/assets/img/common/svg/btn-link.svg' />
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
            <a className={cx('news_img_wrap')} href=''>
              <img className={cx('news_img')} src='/assets/img/common/png/img1.png' />
            </a>
            <p className={cx('news_title')}>KT 클라우드, 출정식 개최…클라우드·IDC 역량 결집</p>
            <p className={cx('news_date')}>2022.06.08</p>
          </li>
          <li className={cx('news_contents_wrap')}>
            <a className={cx('news_img_wrap')} href=''>
              <img className={cx('news_img')} src='/assets/img/common/png/img2.png' />
            </a>
            <p className={cx('news_title')}>KT, 클라우드 생태계 상생 확대, 장터 입점 기업 수익 보전</p>
            <p className={cx('news_date')}>2022.06.08</p>
          </li>
          <li className={cx('news_contents_wrap')}>
            <a className={cx('news_img_wrap')} href=''>
              <img className={cx('news_img')} src='/assets/img/common/png/img3.png' />
            </a>
            <p className={cx('news_title')}>KT-틸론, DaaS 플랫폼 공동개발 MOU 체결</p>
            <p className={cx('news_date')}>2022.06.08</p>
          </li>
          <li className={cx('news_contents_wrap')}>
            <a className={cx('news_img_wrap')} href=''>
              <img className={cx('news_img')} src='/assets/img/common/png/img4.png' />
            </a>
            <p className={cx('news_title')}>KT, 소상공인시장진흥공단 클라우드 전환사업 수주</p>
            <p className={cx('news_date')}>2022.06.08</p>
          </li>
          <li className={cx('news_contents_wrap')}>
            <a className={cx('news_img_wrap')} href=''>
              <img className={cx('news_img')} src='/assets/img/common/png/img5.png' />
            </a>
            <p className={cx('news_title')}>개방형 공공 클라우드 KT 파스타, CSAP 획득</p>
            <p className={cx('news_date')}>2022.06.08</p>
          </li>
          <li className={cx('news_contents_wrap')}>
            <a className={cx('news_img_wrap')} href=''>
              <img className={cx('news_img')} src='/assets/img/common/png/img6.png' />
            </a>
            <p className={cx('news_title')}>KT 2분기 DX 선전 이끈 클라우드의 힘</p>
            <p className={cx('news_date')}>2022.06.08</p>
          </li>
        </ul>
        <div className={cx('mobile_wrapper')}>
          <a href='#' className={cx('learn_link')}>자세히 알아보기</a>
        </div>
        <div className={cx('career_esg_wrap')}>
          <div className={cx('career_esg')}>
            <img className={cx('career_esg_img')} src='/assets/img/common/png/group-28.png' />
            <div className={cx('text_wrap')}>
              <strong className={cx('career_esg_title')}>Career</strong>
              <p className={cx('career_esg_text')}>
                우리의 열정으로
                <br />
                세상이 성장하고 있습니다
              </p>
              <a className={cx('mobile_wrapper', 'career_esg_link')} />

            </div>
          </div>
          <div className={cx('career_esg')}>
            <img className={cx('career_esg_img')} src='/assets/img/common/png/group-46.png' />
            <div className={cx('text_wrap')}>
              <strong className={cx('career_esg_title')}>ESG</strong>
              <p className={cx('career_esg_text')}>
                기업과 사회가 공존하는
                <br />
                지속가능한 미래
              </p>
              <a className={cx('mobile_wrapper', 'career_esg_link')} />
            </div>
          </div>
        </div>
      </div>
      <div className={cx('footer')}>
        <div className={cx('service_policy_wrap')}>
          <a className={cx('service_policy')}>개인정보 처리방침</a>
          <a className={cx('service_policy')}>서비스 이용약관</a>
          <a className={cx('service_policy')}>윤리위반 신고</a>
        </div>
        <div className={cx('company_wrap')}>
          <strong className={cx('company')}>주식회사 케이티클라우드</strong>
          <div className={cx('company_info_wrap')}>
            <span className={cx('company_info')}>대표이사 윤동식</span>
            <span className={cx('company_info')}>서울특별시 강남구 학동로 343 더피나클타워</span>
            <span className={cx('company_info')}>사업자등록번호 : 696-87-02611 </span>
            <span className={cx('company_info')}>고객센터 : 080-2580-005</span>
            <span className={cx('company_info')}>이메일 : ktcloud-voc@kt.com</span>
          </div>
        </div>
        <div className={cx('company_name')}>
          <img src='/assets/img/common/svg/logo-black.svg' />
        </div>
        <a href='#' className={cx('cooperation_company')}>
          <span>관계사 링크</span>
        </a>
      </div>
    </div >
  );
};

export default Main;
