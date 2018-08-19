import React from 'react';
//mport {propTypes }from 'prop-types'


  const icons = {
    'menu': 'M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z',
    'email': 'M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM256 256h512c9.138 0 18.004 1.962 26.144 5.662l-282.144 329.168-282.144-329.17c8.14-3.696 17.006-5.66 26.144-5.66zM192 704v-384c0-1.34 0.056-2.672 0.14-4l187.664 218.942-185.598 185.598c-1.444-5.336-2.206-10.886-2.206-16.54zM768 768h-512c-5.654 0-11.202-0.762-16.54-2.208l182.118-182.118 90.422 105.498 90.424-105.494 182.116 182.12c-5.34 1.44-10.886 2.202-16.54 2.202zM832 704c0 5.654-0.762 11.2-2.206 16.54l-185.6-185.598 187.666-218.942c0.084 1.328 0.14 2.66 0.14 4v384z',
    'underline': 'M704 64h128v416c0 159.058-143.268 288-320 288-176.73 0-320-128.942-320-288v-416h128v416c0 40.166 18.238 78.704 51.354 108.506 36.896 33.204 86.846 51.494 140.646 51.494s103.75-18.29 140.646-51.494c33.116-29.802 51.354-68.34 51.354-108.506v-416zM192 832h640v128h-640z',
    'google': 'M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z',
    'facebook': 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z'
  };


const Icon = props => (
  <svg width="22" height="22" viewBox="0 0 1024 1024">
    <path d={icons[props.icon]}></path>
  </svg>
);
//const { PropTypes } = React;
//Icon.propTypes = {
 // icon: PropTypes.string.isRequired,
//};

export default Icon;