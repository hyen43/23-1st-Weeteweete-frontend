import React from 'react';
import { Link } from 'react-router-dom';

class ProductDetailDescription extends React.Component {
  render() {
    return (
      <section>
        <div className="productDetailDescription">
          <div>
            <Link to="/" className="detailInformation">
              상품상세정보
            </Link>
          </div>
          <div>
            <Link to="/" className="detailReview">
              상품후기
            </Link>
          </div>
          <div>
            <Link to="/" className="delivery">
              배송/교환 및 반품안내
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetailDescription;
