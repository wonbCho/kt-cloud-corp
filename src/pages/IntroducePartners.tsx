import React from 'react';
import classnames from 'classnames';
import styles from './IntroducePartners.scss';

interface IOwnProps {
};

const IntroducePartners: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.introducepartners)}>IntroducePartners</div>
    </>
  );
};

export default IntroducePartners;
