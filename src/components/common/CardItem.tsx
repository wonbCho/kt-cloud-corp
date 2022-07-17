import React from 'react';
import classNames from 'classnames/bind';
import styles from './CardItem.scss';

const cx = classNames.bind(styles);

interface IOwnProps { };

const CardItem: React.FC<IOwnProps> = ({ }) => {
  return (
    <div className={cx('card_item')}>
      <div className={cx('career_esg_wrap')}>
        <div className={cx('career_esg')}>
          <img className={cx('career_esg_img')} src='/static/img/common/png/group-28@2x.png' />
          <div className={cx('text_wrap')}>
            <strong className={cx('career_esg_title')}>Career</strong>
            <p className={cx('career_esg_text')}>
              우리의 열정으로
              <br />
              세상이 성장하고 있습니다
            </p>
            <a className={cx('career_esg_link')}>
              <span className={cx('pc_wrapper')}>인재채용</span>
              <img className={cx('career_esg_link_img')} src='/static/img/common/svg/btn-external-link.svg' />
            </a>
          </div>
        </div>
        <div className={cx('career_esg')}>
          <img className={cx('career_esg_img')} src='/static/img/common/png/group-46@2x.png' />
          <div className={cx('text_wrap')}>
            <strong className={cx('career_esg_title')}>ESG</strong>
            <p className={cx('career_esg_text')}>
              기업과 사회가 공존하는
              <br />
              지속가능한 미래
            </p>
            <a className={cx('career_esg_link')}>
              <span className={cx('pc_wrapper')}>ESG 경영</span>
              <img className={cx('career_esg_link_img')} src='/static/img/common/svg/ico-link.svg' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
