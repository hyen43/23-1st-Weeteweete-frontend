import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
  render() {
    const { open, close, cartText } = this.props;
    console.log(cartText);
    return (
      <div className={open ? 'openModal modal' : 'modal'}>
        {open && (
          <div className="content">
            {cartText}
            <button className="close" onClick={close}>
              X
            </button>
            <button className="goto" onClick={this.props.goToCart}>
              장바구니이동
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
