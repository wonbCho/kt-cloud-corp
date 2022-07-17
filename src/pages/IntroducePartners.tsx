import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './IntroducePartners.scss';
import IntroduceBanner from '@src/components/common/IntroduceBanner';
import Footer from '@src/components/common/Footer';
import { ETags } from '@src/constants/Partners';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroducePartners: React.FC<IOwnProps> = ({ }) => {
  const [selectedTag, setSelectedTag] = useState<ETags>(ETags.ALL);
  console.log(selectedTag);

  return (
    <div className={cx('introducepartners')}>
      <IntroduceBanner title="주요 관계사" />
      <div className={cx('content_area')}>
        <div className={cx('mobile_wrapper', 'select_area')}>
          {Object.values(ETags).map(tag => (
            <button type="button" className={cx('selected_btn')} key={tag} aria-selected={selectedTag === tag}>{tag}</button>
          ))}
        </div>
        <div className={cx('pc_wrapper', 'tag_select_area')}>
          {Object.values(ETags).map(tag => (
            <button type="button" className={cx('selected_btn')} key={tag} aria-selected={selectedTag === tag} onClick={() => setSelectedTag(tag)}>{tag}</button>
          ))}
        </div>
        {(selectedTag === ETags.ALL || selectedTag === ETags.IT) && (
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
        )}
        {(selectedTag === ETags.ALL || selectedTag === ETags.EBIZ) && (
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
        )}
        {(selectedTag === ETags.ALL || selectedTag === ETags.GAME) && (
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
        )}
      </div>
      <Footer />
    </div>
  );
};

export default IntroducePartners;
