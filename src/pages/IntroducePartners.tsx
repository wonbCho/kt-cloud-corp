import React from 'react';
import classNames from 'classnames/bind';
import styles from './IntroducePartners.scss';
import IntroduceBanner from '@src/components/common/IntroduceBanner';
import Footer from '@src/components/common/Footer';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroducePartners: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('introducepartners')}>
      <IntroduceBanner title="주요 관계사" />
      <div className={cx('content_area')}>
        <div className={cx('select_area')}>
          <button type="button" className={cx('selected_btn')} aria-expanded="false">All</button>
          <div className={cx('cooperation_corp_wrap')}>
            <a className={cx('cooperation_corp_link')} href='#'>item 2 item 2 item 2 item 2 item 2 item item 2 item</a>
            <a className={cx('cooperation_corp_link')} href='#'>item 2item 2item 2item 2item 2item 2item 2item 2</a>
            <a className={cx('cooperation_corp_link')} href='#'>item 2item 2item 2item 2</a>
            <a className={cx('cooperation_corp_link')} href='#'>item 2item 2item 2item 2item 2item 2</a>
          </div>
        </div>
        <div className={cx('tab_list')}>
          <strong className={cx('title')}>IT</strong>
          <ul className={cx('content_set')}>
            {[...new Array(3)].map(item => (
              <li className={cx('list')} key={item}>
                <a href="" className={cx('link')}>
                  <div className={cx('thumb')}>
                    <img src="/assets/img/common/png/it_temp.png" alt="" className={cx('image')} />
                  </div>
                  <p className={cx('description')}>주식회사 현대엠소프트</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx('tab_list')}>
          <strong className={cx('title')}>eBiz, EC</strong>
          <ul className={cx('content_set')}>
            {[...new Array(3)].map(item => (
              <li className={cx('list')} key={item}>
                <a href="" className={cx('link')}>
                  <div className={cx('thumb')}>
                    <img src="/assets/img/common/png/it_temp.png" alt="" className={cx('image')} />
                  </div>
                  <p className={cx('description')}>주식회사 현대엠소프트</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx('tab_list')}>
          <strong className={cx('title')}>Game</strong>
          <ul className={cx('content_set')}>
            {[...new Array(3)].map(item => (
              <li className={cx('list')} key={item}>
                <a href="" className={cx('link')}>
                  <div className={cx('thumb')}>
                    <img src="/assets/img/common/png/it_temp.png" alt="" className={cx('image')} />
                  </div>
                  <p className={cx('description')}>주식회사 현대엠소프트</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IntroducePartners;
