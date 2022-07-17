import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './IntroducePartners.scss';
import IntroduceBanner from '@src/components/common/IntroduceBanner';
import Footer from '@src/components/common/Footer';
import { ETag } from '@src/constants/Partners';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroducePartners: React.FC<IOwnProps> = ({ }) => {
  const [selectedTag, setSelectedTag] = useState<ETag>(ETag.ALL);
  const [showTagLayer, setShowTagLayer] = useState<boolean>(false);

  const handleClickTag = (tag: ETag) => {
    setSelectedTag(tag);
    setShowTagLayer(false);
  };

  return (
    <div className={cx('introducepartners')}>
      <IntroduceBanner title="주요 관계사" />
      <div className={cx('content_area')}>
        <div className={cx('mobile_wrapper', 'select_area')}>
          <button type="button" className={cx('selected_btn')} aria-expanded="false" onClick={() => setShowTagLayer(!showTagLayer)}>{selectedTag}</button>
          {showTagLayer && (
            <div className={cx('cooperation_corp_wrap')}>
              {Object.values(ETag).map(tag => (
                <button type="button" className={cx('cooperation_corp_link')} key={tag} onClick={() => handleClickTag(tag)}>{tag}</button>
              ))}
            </div>
          )}
        </div>
        <div className={cx('pc_wrapper', 'tag_select_area')}>
          {Object.values(ETag).map(tag => (
            <button type="button" className={cx('selected_btn')} key={tag} aria-selected={selectedTag === tag} onClick={() => setSelectedTag(tag)}>{tag}</button>
          ))}
        </div>
        {(selectedTag === ETag.ALL || selectedTag === ETag.IT) && (
          <div className={cx('tab_list')}>
            <strong className={cx('title')}>IT</strong>
            <ul className={cx('content_set')}>
              {[...new Array(3).keys()].map(item => (
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
        {(selectedTag === ETag.ALL || selectedTag === ETag.EBIZ) && (
          <div className={cx('tab_list')}>
            <strong className={cx('title')}>eBiz, EC</strong>
            <ul className={cx('content_set')}>
              {[...new Array(3).keys()].map(item => (
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
        {(selectedTag === ETag.ALL || selectedTag === ETag.GAME) && (
          <div className={cx('tab_list')}>
            <strong className={cx('title')}>Game</strong>
            <ul className={cx('content_set')}>
              {[...new Array(3).keys()].map(item => (
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
