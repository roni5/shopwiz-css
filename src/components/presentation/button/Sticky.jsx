import React, { Component } from 'react'

 class Sticky extends Component {
  render() {
    const { logoUrl, alt } = this.props;
    return (
      <div>
      <div className={'logo'}>
          <img src={logoUrl} alt={alt}/>
      </div>
     
     </div>
    )
  }
}

export default Sticky;