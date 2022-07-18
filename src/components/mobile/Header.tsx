import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.scss';
import { Link } from 'react-router-dom';
import URLInfo from '@src/constants/URLInfo';
import useScrollFixed from '@src/hooks/useScrollFixed';
import GNB from './GNB';
import useNoScroll from '@src/hooks/useNoScroll';

const cx = classNames.bind(styles);

interface IOwnProps {
  isLight?: boolean;
};

const Header: React.FC<IOwnProps> = ({ isLight }) => {
  const [showGNB, setShowGNB] = useState<boolean>(false);
  const { useScroll } = useScrollFixed();

  useNoScroll([showGNB]);

  const useFixed = location.pathname !== URLInfo.INTRODUCE_HISTORY && useScroll;

  return (
    <div className={cx('header')}>
      <div className={cx('page_wrap', useFixed && 'fixed', isLight && 'light')}>
        <Link to={URLInfo.MAIN} className={cx('header_title_wrap')}>
        </Link>
        <button className={cx('menu_wrap')} onClick={() => setShowGNB(true)}>
        </button>
      </div>
      {showGNB && (
        <GNB onClose={() => setShowGNB(false)} />
      )}
    </div>
  );
};

export default Header;
