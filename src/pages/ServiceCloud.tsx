import React from 'react';
import classnames from 'classnames';
import styles from './ServiceCloud.scss';

interface IOwnProps {
};

const ServiceCloud: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.servicecloud)}>ServiceCloud</div>
    </>
  );
};

export default ServiceCloud;
