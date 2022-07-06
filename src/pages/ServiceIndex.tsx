import React from 'react';
import classnames from 'classnames';
import styles from './ServiceIndex.scss';

interface IOwnProps {
};

const ServiceIndex: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.serviceindex)}>ServiceIndex</div>
    </>
  );
};

export default ServiceIndex;
