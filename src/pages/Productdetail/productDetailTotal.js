import React from 'react';

class ProductDetailTotal extends React.Component {
  render() {
    return (
      <>
        <section>
          <table className="productDetailTotal">
            <tbody>
              <tr>
                <td>
                  <span>Total: </span>
                  <span className="totalPrice">1,800원</span>
                  <span> (1개)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </>
    );
  }
}

export default ProductDetailTotal;
