import styles from "./style.css";
import React from "react";

import CssModules from "react-css-modules";

class LoadingIcon extends React.Component {
  render() {
    return (
      <div style={{ height: 100 + "%", width: 100 + "%" }}>
        <div styleName="lds-spinner">
          <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}
export default CssModules(LoadingIcon, styles);
