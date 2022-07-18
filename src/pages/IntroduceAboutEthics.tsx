import React from 'react';
import classNames from 'classnames/bind';
import styles from './IntroduceAboutEthics.scss';

import Footer from '@src/components/common/Footer';
import IntroduceBanner from '@src/components/common/IntroduceBanner';

const cx = classNames.bind(styles);

interface IOwnProps { };

const IntroduceAboutEthics: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('introduceaboutethics')}>
      <div className={cx('page_wrap')}>
        <IntroduceBanner title='윤리 · 컴플라이언스' />
        <div className={cx('contents_wrap')}>
          <div><img src="/static/img/common/png/ico_direction_3.svg" /></div>
          <div className={cx('contents_title_wrap')}>
            <strong>
              True
              <br />
              Attitude
            </strong>
            <p>
              우리는 지속 성장하는 kt cloud를 만들기 위해
              <br className={cx('pc_wrapper')} />
              올바른 의사결정과 윤리적 판단으로 회사의 미래를 도모합니다.
              <br className={cx('pc_wrapper')} />
              이를 위해 ‘고객중심, 준법경영, 기본충실, 주인정신, 사회적책임’을
              <br className={cx('pc_wrapper')} />
              모든 kt cloud인이 공유하고 지켜야 할
              <br className={cx('pc_wrapper')} />
              윤리경영 5대 행동원칙으로 삼고, 이를 적극 실천하고 있습니다.

            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};


export default IntroduceAboutEthics;
