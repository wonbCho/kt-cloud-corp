import React from 'react';
import classnames from 'classnames';
import styles from './IntroduceLocation.scss';

interface IOwnProps {
};

const IntroduceLocation: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.introducelocation)}>IntroduceLocation</div>
    </>
  );
};

export default IntroduceLocation;
