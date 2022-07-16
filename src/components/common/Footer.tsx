import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

interface IOwnProps { };

const Footer: React.FC<IOwnProps> = ({ }) => {
  return (
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
          <span className={cx('company_info')}>
            사업자등록번호 : 696-87-02611
            <a href='#' className={cx('pc_wrapper')}> (사업자 정보 확인)</a>
          </span>
          <span className={cx('company_info')}>고객센터 : 080-2580-005</span>
          <span className={cx('company_info')}>이메일 : ktcloud-voc@kt.com</span>
        </div>
      </div>
      <div className={cx('company_name')}>
        <img className={cx('company_logo')} src='/assets/img/common/svg/logo-black.svg' />
      </div>
      <a href='#' className={cx('cooperation_company')}>
        <span>관계사 링크</span>
      </a>
    </div>
  );
};

export default Footer;
