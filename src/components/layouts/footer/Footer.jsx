
import React, { Component } from 'react';
//import Icon from '../../presentation/icon/Icon';
import CssModules from 'react-css-modules';
import styles from './styles.css';
import Clearfix from '../theme/Clearfix';

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      year: new Date().getFullYear()
    }
  }

  render() {
    return (

      <div >
        <Clearfix />
        <div >
          <h4 >
            &copy; {this.state.year} Shopwiz.net
          </h4>
        
        </div>
      </div>
    )
  }
}

export default CssModules(Footer, styles);