
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = ({ src, alt}) => (
  <div>
    <LazyLoadImage  alt={alt} src={src} />
  </div>
);

export default MyImage;
