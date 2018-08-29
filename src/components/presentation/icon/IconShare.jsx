import React from 'react';
import IconSet from './IconSet.jsx';
import { ICONS } from './constants';
import TestShareVia from '../listings/TestShareVia';

 const link = {
 facebook: 'http://facebook.com/shopwiz.net',
 twitter: 'http://twitter.com',
 google: 'http://google.com',
 linkin: 'http://linkin.com',
 beer: 'http://github'
};
function ShareVia(itemName, link){
 const Via = link[itemName];
 return Via;
}
const testshareVia = ShareVia('facebook', link);
console.log(testshareVia); //
console.log(`onClick ${link} was clicked`);

const IconShare = () => (
  <div>
    <button onClick={(props) => {
       IconShare.props = ShareVia('facebook', link);

       }
    } >
      <IconSet icon={ICONS.CLOUD_CHECK} />

    </button>
    <button onClick={() => { ShareVia('twitter', link) }} >
      <IconSet icon={ICONS.BUBBLE} />
    </button>
  </div>
 );

export default IconShare;
