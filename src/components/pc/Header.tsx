import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import { Link, useLocation } from 'react-router-dom';
import URLInfo from '@src/constants/URLInfo';
import useScrollFixed from '@src/hooks/useScrollFixed';

const cx = classNames.bind(styles);

interface IOwnProps {
  isLight?: boolean;
};

const Header: React.FC<IOwnProps> = ({ isLight }) => {
  const location = useLocation();
  const [menu, setMenu] = useState<string>('');
  const { useScroll } = useScrollFixed();

  useEffect(() => {
    setMenu(location.pathname);
  }, [location.pathname]);

  const useFixed = location.pathname !== URLInfo.INTRODUCE_HISTORY && useScroll;

  return (
    <div className={cx('header', useFixed && 'fixed', isLight && 'light')}>
      <div className={cx('header_wrap')}>
        <Link to={URLInfo.MAIN} className={cx('header_title_wrap')}>
        </Link>
        <div className={cx('menu_list')}>
          <Link to={URLInfo.INTRODUCE_ABOUT} className={cx('link')} aria-selected={menu === URLInfo.INTRODUCE_ABOUT}>기업소개</Link>
          <Link to={URLInfo.INTRODUCE_HISTORY} className={cx('link')} aria-selected={menu === URLInfo.INTRODUCE_HISTORY}>연혁</Link>
          <Link to={URLInfo.INTRODUCE_INFOMATION} className={cx('link')} aria-selected={menu === URLInfo.INTRODUCE_INFOMATION}>회사정보</Link>
          <Link to='#' className={cx('link')} aria-selected={menu === URLInfo.INTRODUCE_INFOMATION}>ESG 경영</Link>
          <Link to={URLInfo.INTRODUCE_PARTNERS} className={cx('link')} aria-selected={menu === URLInfo.INTRODUCE_PARTNERS}>주요 관계사</Link>
        </div>
        <div className={cx('menu_bar_wrap')}>
          <button className={cx('console_wrap')}>
            <span>
              CONSOLE
              <img className={cx('console_img')} src="/assets/img/common/svg/white_up_right_allow.svg"></img>
            </span>
          </button>
          {/* [TODO]: 2차 스펙 */}
          {/* <button className={cx('language_wrap')}>
        <img src="/assets/img/common/svg/arrow-dropdown.svg"></img>
        <img src="/assets/img/common/svg/arrow-dropdown.svg"></img>
      </button> */}
          {/* [TODO]: 2차 스펙 */}
          {/* <button className={cx('menu_wrap')}>
            <img src="/assets/img/common/svg/menu-bar.svg"></img>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
