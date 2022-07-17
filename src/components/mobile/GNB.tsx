import React from 'react';
import classNames from 'classnames/bind';

import styles from './GNB.scss';
const cx = classNames.bind(styles);

interface IOwnProps {
}

const GNB: React.FC<IOwnProps> = ({

}) => {
  return (
    <div className={cx('gnb')}>
      <div className={cx('page_wrap')}>
        <div className={cx('header_wrap')}>
          <div className={cx('header_img')} />
          <button className={cx('close_img')} />
        </div>
        <ul className={cx('menu_list_wrap')}>
          <li className={cx('menu_list')}>
            <strong className={cx('menu_title')}>기업소개</strong>
            <div className={cx('menu_link_wrap')}>
              <a className={cx('menu_link')} href="#">소개</a>
              <a className={cx('menu_link')} href="#">윤리 · 컴플라이언스</a>
            </div>
          </li>
          <li className={cx('menu_list')}>
            <a className={cx('menu_title_link')} href="#">연혁</a>
          </li>
          <li className={cx('menu_list')}>
            <a className={cx('menu_title_link')} href="#">회사 정보</a>
          </li>
          <li className={cx('menu_list')}>
            <a className={cx('menu_title_link')} href="#">ESG 경영</a>
          </li>
          <li className={cx('menu_list')}>
            <a className={cx('menu_title_link')} href="#">주요 관계사</a>
          </li>
          <li className={cx('menu_list')}>
            <a className={cx('menu_title_link')} href="#">
              인재채용
              <div className={cx('link_bnt')} />
            </a>
          </li>
        </ul>
        <div className={cx('lan_wrap')}>
          <img className={cx('lan_img')} src="/static/img/common/svg/black_lang.svg" />
          <button>KOR</button>
          <button className={cx('lan')}>ENG</button>
        </div>
      </div>
    </div >
  );
};

export default GNB;
