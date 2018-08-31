import React from 'react';
import PropTypes from 'prop-types';

const IconSet = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      textAlign: 'center',
      borderRadius: 0,
      border: 0
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg
      style={styles.svg}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 1024 1024"
    >
      <path
        style={styles.path}
        d={props.icon}
      ></path>
    </svg>
  );
};

IconSet.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.number,
};

IconSet.defaultProps = {
  size: 16,
};

export default IconSet;