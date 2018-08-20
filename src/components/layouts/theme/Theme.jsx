import React, {Component} from 'react';
import styles from './style.css.js';
import Icon from '../../presentation/icon/Icon';


export const Theme = () => {
  return <h2 style={styles.theme}> <span><Icon icon='git'/> </span><span><Icon icon='google'/> </span> <span><Icon icon='world'/></span></h2>
}