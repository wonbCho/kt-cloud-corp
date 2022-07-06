import React from 'react';
import classnames from 'classnames';
import styles from './IntroduceInfomation.scss';

interface IOwnProps {
};

const IntroduceInfomation: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.introduceinfomation)}>IntroduceInfomation</div>
    </>
  );
};

export default IntroduceInfomation;
