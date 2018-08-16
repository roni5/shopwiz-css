import styles from "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import CssModules from "react-css-modules";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button>
        <Link to={'/'} styleName='button'>  Back </Link>
        </button>

      </div>

    );
  }
}
export default CssModules(Button, styles);
