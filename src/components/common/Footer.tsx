import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

interface IOwnProps { };

const Footer: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('footer')}>
      <div className={cx('wrap')}>
        <div className={cx('service_policy_wrap')}>
          <div className={cx('service_policy')}>
            <a href='#'>개인정보 처리방침</a>
          </div>
          <div className={cx('service_policy')}>
            <a href='#'>서비스 이용약관</a>
          </div>
          <div className={cx('service_policy')}>
            <a href='#'>윤리위반 신고</a>
          </div>
        </div>
        <div className={cx('company_wrap')}>
          <strong className={cx('company')}>주식회사 케이티클라우드</strong>
          <div className={cx('company_info_wrap')}>
            <div className={cx('company_info')}><span>대표이사 윤동식</span></div>
            <div className={cx('company_info')}><span>서울특별시 강남구 학동로 343 더피나클타워</span></div>
            <div className={cx('company_info')}>
              <span>
                사업자등록번호 : 696-87-02611
                <a href='#' className={cx('pc_wrapper')}> (사업자 정보 확인)</a>
              </span>
            </div>
            <div className={cx('company_info')}><span>고객센터 : 080-2580-005</span></div>
            <div className={cx('company_info')}><span>이메일 : ktcloud-voc@kt.com</span></div>
          </div>
        </div>
        <div className={cx('company_name')}>
          <img className={cx('company_logo')} src='/assets/img/common/svg/logo-black.svg' />
        </div>
        <div className={cx('cooperation_btn_wrap')}>
          <button className={cx('cooperation_btn')} aria-selected="false">Family Site</button>
          <div className={cx('cooperation_corp_wrap')}>
            <a className={cx('cooperation_corp_link')} href='#'>item 2 item 2 item 2 item 2 item 2 item item 2 item</a>
            <a className={cx('cooperation_corp_link')} href='#'>item 2item 2item 2item 2item 2item 2item 2item 2</a>
            <a className={cx('cooperation_corp_link')} href='#'>item 2item 2item 2item 2</a>
            <a className={cx('cooperation_corp_link')} href='#'>item 2item 2item 2item 2item 2item 2</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
