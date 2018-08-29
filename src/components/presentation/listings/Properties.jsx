import React, { Component } from 'react';
import Listing from './Listing';

class Properties extends Component {
  constructor() {
    super();
    this.properties = [
      {
        title: 'Modern Loft',
        type: 'Studio',
        location: {
          city: 'San Francisco',
          state: 'CA',
          country: 'USA'
        }
      },
      {
        title: 'Spacious 2 Bedroom',
        type: 'Condo',
        location: {
          city: 'Los Angeles',
          state: 'CA',
          country: 'USA'
        }
      },
    ];
  }
  render() {

    return (
      <div>
        <Listing listing={this.properties[0]} />
        <Listing listing={this.properties[1]} />
        
      </div>
    );
  }
}

export default Properties;