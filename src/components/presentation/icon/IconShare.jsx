import React from 'react';
import IconSet from './IconSet.jsx';
import { ICONS } from './constants';
import {FaceShare} from '../listings/Share';




console.log(`onClick ${FaceShare} was clicked`);

const IconShare = () => (
  <div>
    <button onClick={(props) =>
      <FaceShare/>
    } >
      <IconSet icon={ICONS.CLOUD_CHECK} />

    </button>
    <button onClick={() => { <FaceShare/>}} >
      <IconSet icon={ICONS.BUBBLE} />
    </button>
  </div>
 );

export default IconShare;
