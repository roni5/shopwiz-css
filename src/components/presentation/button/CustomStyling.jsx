
import React from 'react';
import Modal from 'react-responsive-modal';
import CssModules from 'react-css-modules';
import   styles   from    './custom-styling.css';

//const styles = {
 // content: {
  //  backgroundColor       : 'rgba(0,0,0,0.5)',
  //  top                   : '50%',
  //  left                  : '50%',
  //  right                 : 'auto',
 //   bottom                : 'auto',
 //   marginRight           : '-40%',
 //   transform             : 'translate(-50%, -50%)'
 // }
//};

 class CustomStyling extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="custom-overlay">
        <h4>Custom style Modal</h4>
        <button className="btn btn-action" onClick={this.onOpenModal}>
          Open
        </button>{' '}

        <Modal
          styleName='custom-overlay'
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{ overlay: 'custom-overlay', modal: 'custom-modal', close: 'padbox' }}
        >

          <div styleName='custom-modal'>
          <h3 classNames= 'close'>Modal response</h3>
          <div styleName='padbox'>No inline styling with CssModules</div></div>
        </Modal>
      </div>

    );
  }
}

export default CssModules(CustomStyling, styles)  ;