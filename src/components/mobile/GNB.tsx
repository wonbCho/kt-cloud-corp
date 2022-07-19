import React from 'react';
import classNames from 'classnames/bind';

import styles from './GNB.scss';
import { Link } from 'react-router-dom';
import URLInfo from '@src/constants/URLInfo';
const cx = classNames.bind(styles);

interface IOwnProps {
  onClose: () => void;
}

const GNB: React.FC<IOwnProps> = ({
  onClose
}) => {
  return (
    <div className={cx('gnb')}>
      <div className={cx('page_wrap')}>
        <div className={cx('header_wrap')}>
          <div className={cx('header_img')} />
          <button className={cx('close_img')} onClick={onClose} />
        </div>
        <div className={cx('')}>
          <ul className={cx('menu_list_wrap')}>
            <li className={cx('menu_list')}>
              <strong className={cx('menu_title')}>기업소개</strong>
              <div className={cx('menu_link_wrap')}>
                <Link to={URLInfo.INTRODUCE_ABOUT} className={cx('menu_link')} onClick={onClose}>소개</Link>
                <Link to={'#'} className={cx('menu_link')} onClick={onClose}>윤리 · 컴플라이언스</Link>
              </div>
            </li>
            <li className={cx('menu_list')}>
              <Link to={URLInfo.INTRODUCE_HISTORY} className={cx('menu_title_link')} onClick={onClose}>연혁</Link>
            </li>
            <li className={cx('menu_list')}>
              <Link to={URLInfo.INTRODUCE_INFOMATION} className={cx('menu_title_link')} onClick={onClose}>회사 정보</Link>
            </li>
            <li className={cx('menu_list')}>
              <Link to={URLInfo.INTRODUCE_ABOUT_ETHICS} className={cx('menu_title_link')} onClick={onClose}>ESG 경영</Link>
            </li>
            <li className={cx('menu_list')}>
              <Link to={URLInfo.INTRODUCE_PARTNERS} className={cx('menu_title_link')} onClick={onClose}>주요 관계사</Link>
            </li>
            <li className={cx('menu_list')}>
              <a href="#" className={cx('menu_title_link')} onClick={onClose} target="_blank" rel="noreferr">
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
      </div>
    </div >
  );
};

export default GNB;
