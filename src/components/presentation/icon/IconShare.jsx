import React from 'react';
import IconSet from './IconSet.jsx';
import {ICONS} from './constants';

const shareVia = {
  facebook: 'http://facebook.com/shopwiz.net',
  linkin: 'http://linkin.com',
  twitter: 'https://twitter.com'
}
const facebook = 'http://facebook.com/shopwiz.net';
const IconShare = props => (
  <div>
    <button onClick={() => props.facebook('faceboook')}>
      <IconSet icon={ICONS.CLOUD_CHECK} />
    </button>
    <button onClick={() => props.shareVia('twitter')}>
      <IconSet icon={ICONS.BUBBLE} />
    </button>
  </div>
 );

 export default IconShare;