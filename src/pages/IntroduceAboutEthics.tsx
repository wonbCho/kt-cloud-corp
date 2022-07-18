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
      <IntroduceBanner title='윤리 · 컴플라이언스' />
      <div className={cx('page_wrap')}>
        <div className={cx('main_wrap')}>
          <div className={cx('main_img_wrap')}>
            <img className={cx('main_img')} src="/static/img/common/svg/ico_direction_3.svg" />
          </div>
          <div className={cx('main_contents_wrap')}>
            <strong className={cx('main_title')}>
              True
              <br />
              Attitude
            </strong>
            <p className={cx('main_text')}>
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
        <div className={cx('contents_wrap')}>
          <div className={cx('attitude_wrap')}>
            <div className={cx('attitude_img_wrap')}>
              <img className={cx('mobile_wrapper', 'attitude_img')} src="/static/img/mobile/png/ethics_image_1.png"></img>
              <img className={cx('pc_wrapper', 'attitude_img')} src="/static/img/pc/png/ethics_image_1.png"></img>
              <div className={cx('img_text')}>
                <span>First</span>
                <span>
                  고객 중심으로
                  <br />
                  사고하고 행동합니다
                </span>
              </div>
            </div>
            <div className={cx('list_wrap')}>
              <ul className={cx('list')}>
                <li className={cx('title')}>
                  <span>
                    고객의 가치를 존중하고
                    <br />
                    정보를 철저히 보호하고 있습니다.
                  </span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>1</span>
                  <span>투철한 고객서비스 마인드로 고객의 말에 항상 귀를 기울이고, 고객을 모든 판단 및 행동의 최우선 기준으로 삼고 있습니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>2</span>
                  <span>진실한 마음과 친절한 태도로 고객을 대하며, 고객의 제안과 불만을 겸허하게 수용 합니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>3</span>
                  <span>소중한 고객 정보가 불법 유출되거나 사용되지 않도록 철저히 보호합니다.</span>
                </li>
              </ul>
              <ul className={cx('list')}>
                <li className={cx('title')}>
                  <span>
                    고객의 삶의 변화를 이끌 수 있는
                    <br />
                    차별화된 가치를 끊임없이 창출합니다.
                  </span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>1</span>
                  <span>고객가치 지향적 사고와 행동으로 고객이 원하는 바를 충족시켜, 고객만족과 고객감동을 실현합니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>2</span>
                  <span>고객의 요구와 기대에 부응하는 상품과 서비스를 적기에 제공합니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>3</span>
                  <span>고객의 발전이 곧 우리의 발전이라는 인식으로, 고객이 필요로 하는 차별화된 가치를 찾기 위해 끊임없이 노력합니다.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('attitude_wrap')}>
            <div className={cx('attitude_img_wrap')}>
              <img className={cx('mobile_wrapper', 'attitude_img')} src="/static/img/mobile/png/ethics_image_1.png"></img>
              <img className={cx('pc_wrapper', 'attitude_img')} src="/static/img/pc/png/ethics_image_1.png"></img>
              <div className={cx('img_text')}>
                <span>Second</span>
                <span>
                  각종 법령과 규정을
                  <br />
                  엄격히 준수합니다.
                </span>
              </div>
            </div>
            <div className={cx('list_wrap')}>
              <ul className={cx('list')}>
                <li className={cx('title')}>
                  <span>
                    법과 윤리에 따라 공정하고 깨끗하게 행동하며
                    <br />
                    컴플라이언스 의무를 이행합니다.
                  </span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>1</span>
                  <span>전기통신, 방송, 공정거래, 정보보호 등에 관한 각종 법규와 사규 등 회사 내부 기준 및 프로세스 등을 준수합니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>2</span>
                  <span>시장 경쟁질서를 존중하고, 정당한 방법으로 경쟁하며, 사회 통념을 벗어나는 부정한 방법으로 부당한 이득을 취하지 않습니다.</span>
                </li>
              </ul>
              <ul className={cx('list')}>
                <li className={cx('title')}>
                  <span>
                    부패가 없는 세상을 만들기 위해
                    <br />
                    명확하고 투명하게 강령을 준수합니다.
                  </span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>1</span>
                  <span>윤리적으로 사업을 영위하고, 사업의 취득 또는 유지를 위한 모든 형태의 직접 또는 간접의 부패행위를 하지 않습니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>2</span>
                  <span>부패방지 법령을 준수하고 공직자에게 직접 또는 간접적으로 어떠한 뇌물도 제공, 제안, 약속하지 않습니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>3</span>
                  <span>관련 법령 및 사내 규정에 따라 정확하고 공정하게 회계장부를 기록합니다.</span>
                </li>
              </ul>
              <ul className={cx('list')}>
                <li className={cx('title')}>
                  <span>
                    경영의 투명성을 확보 유지하며,
                    <br />
                    회사의 비밀은 철저히 보호 합니다.
                  </span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>1</span>
                  <span>문서/계수 조작, 허위보고 등 일체의 경영왜곡 행위를 하지 않습니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>2</span>
                  <span>회계관련 법규 및 국제적으로 통용되는 회계기준을 준수합니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>3</span>
                  <span>재직 중은 물론 퇴직 후에도 회사 생활 중에 취득한 기술, 정보, 사업추진 내용 등을 회사의 승인 없이 외부에 공유하거나 유출하지 않는다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>4</span>
                  <span>
                    회의 결과는 회의 관련 임직원과 자기 업무에 필요한 내용만 간략하게 공유 하고,
                    회의 내용을 회사의 승인 없이 외부에 공유하거나 유출하지 않습니다
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('attitude_wrap')}>
            <div className={cx('attitude_img_wrap')}>
              <img className={cx('mobile_wrapper', 'attitude_img')} src="/static/img/mobile/png/ethics_image_1.png"></img>
              <img className={cx('pc_wrapper', 'attitude_img')} src="/static/img/pc/png/ethics_image_1.png"></img>
              <div className={cx('img_text')}>
                <span>Third</span>
                <span>
                  기본과 원칙에 충실하게
                  <br />
                  행동합니다
                </span>
              </div>
            </div>
            <div className={cx('list_wrap')}>
              <ul className={cx('list')}>
                <li className={cx('title')}>
                  <span>
                    회사 전체 이익 관점에서 합리적, 객관적으로
                    <br />
                    판단하고, 책임 있게 행동합니다.
                  </span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>1</span>
                  <span>부분적인 이익 추구를 지양하고, 회사 전체의 이익을 최우선 고려합니다</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>2</span>
                  <span>합리적이고 객관적인 사고와 기준으로 판단하고 결정하며, 결정된 일은 즉시 실행하고 그 결과에 대해 책임을 지고 있습니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>3</span>
                  <span>회사와 개인의 이해가 상충되는 경우, 회사의 합법적 이익을 우선합니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>4</span>
                  <span>회사에 피해를 주는 리스크가 발생되지 않도록 노력하고, 리스크 발생 시 신속하게 대응합니다</span>
                </li>
              </ul>
              <ul className={cx('list')}>
                <li className={cx('title')}>
                  <span>
                    공과 사를 엄격히 구분하며, 건전하고
                    <br />
                    깨끗한 조직문화 조성에 앞장섭니다
                  </span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>1</span>
                  <span>회사의 자산을 사적인 용도로 사용하지 않으며, 회사와 타인의 지식재산에 대해 무단사용, 복제, 배포, 변경 등 일체의 침해 행위를 하지 않습니다</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>2</span>
                  <span>회사의 자산과 자신의 직위를 이용하여 사익을 취하지 않으며, 회사 자산의 횡령, 유용 등 일체의 부정한 행위를 하지 않습니다</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>3</span>
                  <span>성희롱, 금전거래, 폭력, 파벌형성 등 건전한 동료관계를 해치거나 조직 내 위화감을 야기하는 일체의 언행 및 행동을 하지 않습니다</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('attitude_wrap')}>
            <div className={cx('attitude_img_wrap')}>
              <img className={cx('mobile_wrapper', 'attitude_img')} src="/static/img/mobile/png/ethics_image_1.png"></img>
              <img className={cx('pc_wrapper', 'attitude_img')} src="/static/img/pc/png/ethics_image_1.png"></img>
              <div className={cx('img_text')}>
                <span>Fourth</span>
                <span>
                  스스로 회사와 내가 하나라는
                  <br />
                  주인정신
                </span>
              </div>
            </div>
            <div className={cx('list_wrap')}>
              <ul className={cx('list')}>
                <li className={cx('title')}>
                  <span>
                    실패를 두려워하지 않고,
                    <br />
                    항상 최고에 도전합니다.
                  </span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>1</span>
                  <span>회사와 개인의 차별화된 경쟁력 확보 및 유지를 위해 발전적 변화방안을 끊임없이 모색합니다</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>2</span>
                  <span>회사의 이익과 발전을 위한 도전은 목표를 명확히 하고, 실패를 두려워하지 않고 적극 시도 합니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>3</span>
                  <span>최고의 기술 확보와 품질 유지, 불필요한 비용요소 제거를 위해 최선을 다한다.</span>
                </li>
              </ul>
              <ul className={cx('list')}>
                <li className={cx('title')}>
                  <span>
                    자율과 임파워먼트, 소통과 협업을 통해
                    <br />
                    효율성 향상을 추구합니다.
                  </span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>1</span>
                  <span>자신의 위치보다 한 단계 이상의 역할을 수행할 수 있도록 주어진 일과 권한위임의 내용을 명확히 파악하고, 리스크에 철저히 대비합니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>2</span>
                  <span>주어진 일은 스스로의 책임하에 철저하게 준비하고, 유연한 처리로 결과의 완성도를 높이며, 동료, 부서간의 적극적인 협조와 원활한 의사소통으로 일의 효율성을 높입니다</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>3</span>
                  <span>상사의 위법 또는 부당한 지시가 있는 경우 관련 근거를 제시하여 객관적, 합리적으로 대응합니다.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('attitude_wrap')}>
            <div className={cx('attitude_img_wrap')}>
              <img className={cx('mobile_wrapper', 'attitude_img')} src="/static/img/mobile/png/ethics_image_1.png"></img>
              <img className={cx('pc_wrapper', 'attitude_img')} src="/static/img/pc/png/ethics_image_1.png"></img>
              <div className={cx('img_text')}>
                <span>Fifth</span>
                <span>
                  국민기업으로서
                  <br />
                  사회적 책임과 의무
                </span>
              </div>
            </div>
            <div className={cx('list_wrap')}>
              <ul className={cx('list')}>
                <li className={cx('title')}>
                  <span>
                    주주의 권리와 이익을 보호하고,
                    <br />
                    임직원의 「삶의 질」 향상을 위해 노력합니다.
                  </span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>1</span>
                  <span>건실한 경영활동을 통해 안정적인 수익을 창출하고, 회사의 시장가치를 제고하여 주주에게 장기적 이익을 제공합니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>2</span>
                  <span>모든 임직원에게 동등한 기회를 제공하고, 능력과 업적에 대해 공정한 기준에 따라 평가하며, 정당하게 보상합니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>3</span>
                  <span>끊임없는 자기계발을 권장하고, 독창적 사고와 자율적 행동이 촉진될 수 있는 여건을 조성하며, 일을 통해 긍지와 보람을 성취할 수 있도록 최선을 다하고 있습니다.</span>
                </li>
              </ul>
              <ul className={cx('list')}>
                <li className={cx('title')}>
                  <span>
                    환경ㆍ안전ㆍ인권을 중시하고, 회사가 가진 역량을 활용하여 ESG 경영을 적극 추진 하고 있습니다.
                  </span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>1</span>
                  <span>디지털 기술을 활용하여 친환경 산업 생태계를 선도하고, 환경보호 및 오염방지, 자원의 효율적 사용에 앞장섭니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>2</span>
                  <span>안전수칙을 준수하고, 쾌적한 근무환경을 조성하여 안전 사고를 예방합니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>3</span>
                  <span>개인의 존엄성과 다양성을 존중하며, 모든 이해관계자에 대해 국적, 인종, 성별, 종교 등에 따른 차별을 하지 않습니다.</span>
                </li>
              </ul>
              <ul className={cx('list')}>
                <li className={cx('title')}>
                  <span>
                    사회공헌 활동에 앞장서고,
                    <br />
                    사업 파트너와 동반성장의 관계를 구축하고 있습니다.
                  </span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>1</span>
                  <span>사회 공공의 문화와 관습, 가치관을 존중하고, 학문과 예술, 체육 등의 발전을 위해 책임과 역할을 다합니다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>2</span>
                  <span>자원봉사, 재난구호 등의 사회봉사활동을 적극 실천한다.</span>
                </li>
                <li className={cx('text_wrap')}>
                  <span>3</span>
                  <span>사업 파트너를 전략적 동반자로 인식하여 평등한 참여기회를 보장하고, 투명하고 공정한 거래를 통해 공동의 발전을 추구하는 상생 협력관계를 구축합니다.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default IntroduceAboutEthics;
