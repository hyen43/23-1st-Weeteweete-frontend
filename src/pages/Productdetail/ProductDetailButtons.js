import React from 'react';

class ProductDetailButtons extends React.Component {
  render() {
    return (
      <section>
        <div className="productDetailbuttons">
          <button className="buyNowButton" type="button">
            BUY NOW
          </button>
          <button
            className="addCart"
            type="button"
            onClick={this.props.openModal}
          >
            ADD CART
          </button>
        </div>
      </section>
    );
  }
}

export default ProductDetailButtons;
