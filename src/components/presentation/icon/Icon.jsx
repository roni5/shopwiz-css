import React from 'react';
//mport {propTypes }from 'prop-types'


  const icons = {
    'git': 'M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z',
    'tel': 'M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z',
    'menu': 'M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z',
    'email': 'M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM256 256h512c9.138 0 18.004 1.962 26.144 5.662l-282.144 329.168-282.144-329.17c8.14-3.696 17.006-5.66 26.144-5.66zM192 704v-384c0-1.34 0.056-2.672 0.14-4l187.664 218.942-185.598 185.598c-1.444-5.336-2.206-10.886-2.206-16.54zM768 768h-512c-5.654 0-11.202-0.762-16.54-2.208l182.118-182.118 90.422 105.498 90.424-105.494 182.116 182.12c-5.34 1.44-10.886 2.202-16.54 2.202zM832 704c0 5.654-0.762 11.2-2.206 16.54l-185.6-185.598 187.666-218.942c0.084 1.328 0.14 2.66 0.14 4v384z',
    'world': 'M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z',
    'google': 'M258.278 446.542l-146.532-253.802c93.818-117.464 238.234-192.74 400.254-192.74 187.432 0 351.31 100.736 440.532 251h-417.77c-7.504-0.65-15.092-1-22.762-1-121.874 0-224.578 83.644-253.722 196.542zM695.306 325h293.46c22.74 57.93 35.234 121.004 35.234 187 0 280.826-226.1 508.804-506.186 511.926l209.394-362.678c29.48-42.378 46.792-93.826 46.792-149.248 0-73.17-30.164-139.42-78.694-187zM326 512c0-102.56 83.44-186 186-186s186 83.44 186 186c0 102.56-83.44 186-186 186s-186-83.44-186-186zM582.182 764.442l-146.578 253.878c-246.532-36.884-435.604-249.516-435.604-506.32 0-91.218 23.884-176.846 65.696-251.024l209.030 362.054c41.868 89.112 132.476 150.97 237.274 150.97 24.3 0 47.836-3.34 70.182-9.558z',
    'facebook': 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z'
  };


const Icon = props => (
  <svg width="42" height="42" viewBox="0 0 1024 1024">
    <path d={icons[props.icon]}></path>
  </svg>
);
//const { PropTypes } = React;
//Icon.propTypes = {
 // icon: PropTypes.string.isRequired,
//};

export default Icon;