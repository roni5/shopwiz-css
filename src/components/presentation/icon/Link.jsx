import React from 'react';
import Icon from '../../presentation/icon/Icon';
import IconSet from './IconSet.jsx';
import {ICONS} from './constants';
import IconShare from './IconShare';
import PropTypes from 'prop-types';

const propTypes = {

  url: PropTypes.string.isRequired,
  text:  PropTypes.string.isRequired
};

const defaultProps = {
  shareVia: 'http://' + '.com',
};
//const href = { url: 'https://www.linkedin.com/in/ronimcguinness/' };

class Link extends React.Component {

  onClick = (e) => {
   // e.preventDefault()
    //console.log('onclick..')
    //this.props.text
    //this.props.url;
    //alert(this.props.href);
    <button> </button>

  }

  render() {
    return <div>
      <a onClick={this.onClick} href={this.props.href} ><button> <IconSet icon={ICONS.LINKEDIN}  /></button></a>
      <div> <p>  </p> </div>
      </div>
  }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;