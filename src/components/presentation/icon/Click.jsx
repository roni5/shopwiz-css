import React from 'react';
import Icon from '../../presentation/icon/Icon';

export default class Click extends React.Component {
  onClick = (e) => {
    //e.preventDefault()
   // console.log('onclick..')
   // alert('hello');
  }
  render() {
    return (
      <a href= 'https://github.com/roni5/shopwiz-css' onClick={this.onClick} ><span><Icon icon='git'/></span>   </a>
    )
  }
}