import React from 'react';
import classnames from 'classnames';
import styles from './IntroduceAbout.scss';

interface IOwnProps {
};

const IntroduceAbout: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.introduceabout)}>IntroduceAbout</div>
    </>
  );
};

export default IntroduceAbout;
