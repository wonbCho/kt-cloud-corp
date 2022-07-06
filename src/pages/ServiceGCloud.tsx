import React from 'react';
import classnames from 'classnames';
import styles from './ServiceGCloud.scss';

interface IOwnProps {
};

const ServiceGCloud: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.servicegcloud)}>ServiceGCloud</div>
    </>
  );
};

export default ServiceGCloud;
