import React from 'react';
import classNames from 'classnames/bind';
import styles from './IntroduceAbout.scss';
import Header from '@src/components/common/Header';
import Footer from '@src/components/common/Footer';
import CardItem from '@src/components/common/CardItem';

interface IOwnProps {
};

const cx = classNames.bind(styles);

const IntroduceAbout: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('introduce_about')}>
      <Header isLight={true} />
      <div className={cx('content_1')}>
        <div className={cx('content_wrap')}>
          <span className={cx('intro_title')}>기업소개</span>
          <strong className={cx('text')}>
            Connect
            <br />
            New Life
          </strong>
        </div>
      </div>
      <div className={cx('content_2')}>
        <div className={cx('text_wrap')}>
          <p className={cx('text_1')}>
            우리의 하루의 시작과 끝은
            <br />
            공간을 넘어 어김없이 세상과 연결 되어 있습니다.
          </p>
          <p className={cx('text_2')}>
            새로운 세상으로의 연결,
            <br />
            케이티클라우드가 우리의 일상의 디지털을
            <br />
            견고하게 이어가고 있습니다.
          </p>
        </div>
      </div>
      <div className={cx('text_info')}>
        <strong className={cx('title')}>우리가 하는 일</strong>
        <p className={cx('text')}>IDC, 클라우드, 네트워크 같이 우리의 일상과 비즈니스에서 필요한 인프라를 제공하는 국내 유일의 클라우드로서, 고객의 눈높이에 맞춘 서비스를 제공하는 대한민국 대표 DX 전문기업입니다.</p>
      </div>
      <div className={cx('mobile_wrapper')}>
        <div className={cx('info_banner')}>
          <strong className={cx('title')}>Ture Cloud</strong>
          <p className={cx('text')}>
            대한민국 클라우드의 첫 걸음,
            <br />
            먼저 이루며 이끌어 가고 있습니다.
          </p>
          <img className={cx('image')} src="/static/img/common/png/info_banner_1.png" />
          <div className={cx('sub_text_area')}>
            <strong className={cx('sub_text')}>대한민국 클라우드의 역사</strong>
            <p className={cx('sub_text')}>국내 최초 퍼블릭 클라우드 1호 인증</p>
          </div>
        </div>
        <div className={cx('info_banner')}>
          <strong className={cx('title')}>
            Digital Transformation for all X
          </strong>
          <p className={cx('text')}>
            다양한 비즈니스 환경에서
            <br />
            최적의 맞춤 서비스를 실현 합니다.
          </p>
          <img className={cx('image')} src="/static/img/common/png/info_banner_2.png" />
          <div className={cx('sub_text_area')}>
            <strong className={cx('sub_text')}>최상의 네트워크 인프라 환경</strong>
            <p className={cx('sub_text')}>
              국내 유일의
              <br />
              IDC - 클라우드 - 네트워크 인프라
            </p>
          </div>
        </div>
        <div className={cx('info_banner')}>
          <strong className={cx('title')}>Hyper AI Computing</strong>
          <p className={cx('text')}>
            상상을 실현케 하는 AI 클라우드로
            <br />
            더 나은 세상을 만들어 갑니다.
          </p>
          <img className={cx('image')} src="/static/img/common/png/info_banner_2.png" />
          <div className={cx('sub_text_area')}>
            <strong className={cx('sub_text')}>세계 최초 다중/동적 할당 기술</strong>
            <p className={cx('sub_text')}>
              수백 수천개의 대규모 GPU
              <br />
              클러스터링으로 혁신적인 성능
            </p>
          </div>
        </div>
      </div>
      <div className={cx('pc_wrapper')}>
        <div className={cx('banner_area')}>
          <div className={cx('main_content')}>
            <div className={cx('content_wrap')}>
              <div className={cx('text_area')}>
                <strong className={cx('title')}>Ture Cloud</strong>
                <p className={cx('text')}>
                  대한민국 클라우드의 첫 걸음,
                  먼저 이루며 이끌어 가고 있습니다.
                </p>
                <div className={cx('sub_text_area')}>
                  <strong className={cx('sub_text')}>대한민국 클라우드의 역사</strong>
                  <p className={cx('sub_text')}>국내 최초 퍼블릭 클라우드 1호 인증</p>
                </div>
              </div>
              <img src="/static/img/common/png/info_banner_1.png" className={cx('image')} />
            </div>
          </div>
          <div className={cx('sub_content_wrap')}>
            <ul className={cx('sub_content')}>
              <li className={cx('list')}>
                <strong className={cx('title')}>
                  Digital Transformation
                  <br />
                  for all X
                </strong>
                <p className={cx('text')}>
                  다양한 비즈니스 환경에서
                  <br />
                  최적의 맞춤 서비스를 실현 합니다.
                </p>
                <div className={cx('sub_text_area')}>
                  <strong className={cx('sub_text')}>최상의 네트워크 인프라 환경</strong>
                  <p className={cx('sub_text')}>국내 유일의 IDC - 클라우드 - 네트워크 인프라</p>
                </div>
                <div className={cx('thumb')}>
                  <img src="/static/img/common/png/info_banner_2.png" alt="" className={cx('image')} />
                </div>
              </li>
              <li className={cx('list')}>
                <strong className={cx('title')}>
                  Hyper AI Computing
                </strong>
                <p className={cx('text')}>
                  상상을 실현케 하는 AI 클라우드로
                  <br />
                  더 나은 세상을 만들어 갑니다.
                </p>
                <div className={cx('sub_text_area')}>
                  <strong className={cx('sub_text')}>세계 최초 다중/동적 할당 기술</strong>
                  <p className={cx('sub_text')}>수백 수천개의 대규모 GPU 클러스터링으로 혁신적인 성능</p>
                </div>
                <div className={cx('thumb')}>
                  <img src="/static/img/common/png/info_banner_2.png" alt="" className={cx('image')} />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx('list_info')}>
        <strong className={cx('title')}>고객 중심의 방향성</strong>
        <p className={cx('text')}>
          우리는 세상을 이롭게 하기 위해 여러분을 중심으로 방향성을 짚고 그 안에서 성장과 상생을 함께 실현하여 사회적인 윤리와 책임까지 실천 합니다.
        </p>
        <ul className={cx('list_set')}>
          <li className={cx('list')}>
            <div className={cx('thumb')}>
              <img src="/static/img/common/png/ico_direction_1.png" className={cx('image')} alt="" />
            </div>
            <div className={cx('sub_text_area')}>
              <span className={cx('sub_text')}>지속성장</span>
              <p className={cx('sub_text')}>
                지속적이며 진정한 내실을 통한 성장으로 kt cloud의 가치를 높입니다.
              </p>
            </div>
          </li>
          <li className={cx('list')}>
            <div className={cx('thumb')}>
              <img src="/static/img/common/png/ico_direction_2.png" className={cx('image')} alt="" />
            </div>
            <div className={cx('sub_text_area')}>
              <span className={cx('sub_text')}>제휴 투자</span>
              <p className={cx('sub_text')}>
                작지만 역량있는 파트너와 협업 및 투자하여 변화하는 시장을 함께 대응합니다.
              </p>
            </div>
          </li>
          <li className={cx('list')}>
            <div className={cx('thumb')}>
              <img src="/static/img/common/png/ico_direction_3.svg" className={cx('image')} alt="" />
            </div>
            <div className={cx('sub_text_area')}>
              <span className={cx('sub_text')}>인재 육성</span>
              <p className={cx('sub_text')}>
                혁신의 마음을 가진 인재와 함께 새로운 가치를 발굴합니다.
              </p>
            </div>
          </li>
          <li className={cx('list')}>
            <div className={cx('thumb')}>
              <img src="/static/img/common/png/ico_direction_4.png" className={cx('image')} alt="" />
            </div>
            <div className={cx('sub_text_area')}>
              <span className={cx('sub_text')}>상생 협력</span>
              <p className={cx('sub_text')}>
                단순 협력이 아닌 파트너와 동반 성장을 통해 더 나은 일상을 만들어 갑니다.
              </p>
            </div>
          </li>
          <li className={cx('list')}>
            <div className={cx('thumb')}>
              <img src="/static/img/common/png/ico_direction_5.png" className={cx('image')} alt="" />
            </div>
            <div className={cx('sub_text_area')}>
              <span className={cx('sub_text')}>품질 최우선</span>
              <p className={cx('sub_text')}>
                현재에 안주하지 않고 끊임 없는 연구와 서비스 제공으로 고객과 함께 성장합니다.
              </p>
            </div>
          </li>
          <li className={cx('list')}>
            <div className={cx('thumb')}>
              <img src="/static/img/common/png/ico_direction_6.png" className={cx('image')} alt="" />
            </div>
            <div className={cx('sub_text_area')}>
              <span className={cx('sub_text')}>ESG 경영</span>
              <p className={cx('sub_text')}>
                기업 경영에서 지속가능성을 달성하기 위한 3가지 핵심 요소로 지속가능성을 높입니다
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={cx('text_info')}>
        <strong className={cx('title')}>디지털 일상을 만드는 여정</strong>
        <p className={cx('text')}>우리는 세상을 이롭게 하기 위해 여러분을 중심으로 방향성을 짚고 그 안에서 성장과 상생을 함께 실현하여 사회적인 윤리와 책임까지 실천 합니다.</p>
      </div>
      <div className={cx('card_item_wrap')}>
        <CardItem />
      </div>
      <Footer />
    </div>
  );
};

export default IntroduceAbout;
