import React, { Component } from 'react';

export default class ShareIt extends Component {
  constructor(props) {
    super(props);
    this.properties = {
      facebook: 'http://facebook.com/shopwiz.net',
      twitter: 'http://twitter.com',
      google: 'http://google.com',
      linkin: 'http://linkin.com',
      github: 'http://github'
    };
    this.ShareVia = this.ShareVia.bind(this);
  }
  ShareVia(itemName, properties) {
    //const Via = linky[itemName];
    //return Via;
    console.log('Click happened');
  }
  //ES7 class properties bind
  handleClick = (event) => {
    ShareIt.properties = this.properties.facebook;
    console.log(ShareIt.properties.facebook);
  }
  render() {

    return <button onClick={this.handleClick}>Share it</button>;
  }
}