import React from 'react';
import classnames from 'classnames';
import styles from './ServiceIDC.scss';

interface IOwnProps {
};

const ServiceIDC: React.FC<IOwnProps> = ({ }) => {
  return (
    <>
      <div className={classnames(styles.serviceidc)}>ServiceIDC</div>
    </>
  );
};

export default ServiceIDC;
