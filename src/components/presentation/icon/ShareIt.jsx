import React, { Component } from 'react';

export default class ShareIt extends Component {
  constructor(props) {
    super(props);
    this.linky = {
      facebook: 'http://facebook.com/shopwiz.net',
      twitter: 'http://twitter.com',
      google: 'http://google.com',
      linkin: 'http://linkin.com',
      github: 'http://github'
     };
    this.ShareVia = this.ShareVia.bind(this);
  }
   ShareVia(itemName, linky) {
   //const Via = linky[itemName];
    //return Via;
    console.log('Click happened');
  }

  render() {

    return <button onClick={this.ShareVia()}>Click Me</button>;
  }
}