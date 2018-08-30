import React, { Component } from 'react';
import Modal from 'react-modal';
import MyModal from './Modal';

const MODAL_A = 'modal_a';
const MODAL_B = 'modal_b';

const KART_ITEMS = 'Add Request';

class SimpleUsage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: KART_ITEMS,
      currentModal: null
    };
  }

  toggleModal = key => event => {
    event.preventDefault();
    if (this.state.currentModal) {
      this.handleModalCloseRequest();
      return;
    }

    this.setState({
      ...this.state,
      currentModal: key,
      title1: KART_ITEMS
    });
  }

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({
      ...this.state,
      currentModal: null
    });
  }

  handleInputChange = e => {
    let text = e.target.value;
    if (text == '') {
      text = KART_ITEMS;
    }
    this.setState({ ...this.state, title1: text });
  }

  handleOnAfterOpenModal = () => {
    // when ready, we can access the available refs.
    this.heading && (this.heading.style.color = '#F00');
  }

  render() {
    const { currentModal } = this.state;

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggleModal(MODAL_A)}>Open Q</button>
        <button type="button" className="btn btn-primary" onClick={this.toggleModal(MODAL_B)}>Open Help</button>
        <MyModal
          title={this.state.title1}
          isOpen={currentModal == MODAL_A}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.handleModalCloseRequest}
          askToClose={this.toggleModal(MODAL_A)}
          onChangeInput={this.handleInputChange} />
        <Modal
          style={{ padding: 15 , background:'red'}}
          ref="mymodal2"
          id="test2"
          aria={{
            labelledby: "heading",
            describedby: "fulldescription"
          }}
          closeTimeoutMS={150}
          contentLabel="modalB"
          isOpen={currentModal == MODAL_B}
          shouldCloseOnOverlayClick={false}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.toggleModal(MODAL_B)}>
          <h1 id="heading" ref={h1 => this.heading = h1}> modal 2</h1>
          <div id="fulldescription" tabIndex="0" role="document">
            <p>This is a description of what it does: nothing :)</p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SimpleUsage;