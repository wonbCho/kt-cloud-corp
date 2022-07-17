import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import { Link } from 'react-router-dom';
import URLInfo from '@src/constants/URLInfo';
import useScrollFixed from '@src/hooks/useScrollFixed';
import GNB from './GNB';

const cx = classNames.bind(styles);

interface IOwnProps {
  isLight?: boolean;
};

const Header: React.FC<IOwnProps> = ({ isLight }) => {
  const [showGNB, setShowGNB] = useState<boolean>(false);
  const { useScroll } = useScrollFixed();

  const useFixed = location.pathname !== URLInfo.INTRODUCE_HISTORY && useScroll;

  return (
    <div className={cx('header', useFixed && 'fixed')}>
      <Link to={URLInfo.MAIN} className={cx('header_title_wrap')}>
        {isLight ? (
          <img src="/static/img/common/png/logo.png" />
        ) : (
          <img src="/static/img/common/png/logo_color.png" />
        )}
      </Link>
      <button className={cx('menu_wrap')} onClick={() => setShowGNB(true)}>
        <img src="/static/img/common/svg/menu-bar.svg"></img>
      </button>
      {showGNB && (
        <GNB />
      )}
    </div>
  );
};

export default Header;
