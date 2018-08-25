import React from 'react';
import IconSet from './IconSet.jsx';
import {ICONS} from './constants';

 const link = {
 facebook: 'http://facebook.com/shopwiz.net',
 twitter: 'http://twitter.com',
 google: 'http://google.com',
 linkin: 'http://linkin.com',
 beer: 'http://github'
};
function GetshareVia(itemName, link){
 const shareVia = link[itemName];
 return shareVia;
}
const testshareVia = GetshareVia('facebook', link);
console.log(testshareVia); //

const IconShare = (props ) => (
  <div>
    <button onClick={() => props.GetshareVia('facebook', link)}>
      <IconSet icon={ICONS.CLOUD_CHECK} />
    </button>
    <button onClick={() => props.shareVia('twitter')}>
      <IconSet icon={ICONS.BUBBLE} />
    </button>
  </div>
 );

 export default IconShare;