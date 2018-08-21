import React from 'react';
const {PropTypes} = React;

const IconSet = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
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

//IconSet.propTypes = {
 // icon: PropTypes.string.isRequired,
 // size: PropTypes.number,
 // color: PropTypes.string,
//};

IconSet.defaultProps = {
  size: 16,
};

export default IconSet;