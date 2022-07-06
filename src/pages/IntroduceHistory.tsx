import React from 'react';
import classnames from 'classnames';
import styles from './IntroduceHistory.scss';

interface IOwnProps {
};

const IntroduceHistory: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.introducehistory)}>IntroduceHistory</div>
    </>
  );
};

export default IntroduceHistory;
