import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import ProductDetailInfo from './productDetailInfo';
import ProductDetailOption from './ProductDetailOption';
import ProductDetailTotal from './productDetailTotal';
import './Productdetail.scss';

class Productdetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: {},
    };
  }

  componentDidMount() {
    fetch('/data/ItemData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          detailData: data[0],
        });
      });
  }

  render() {
    const { detailData } = this.state;

    return (
      <main className="productDetailPage">
        <div className="productDetail">
          <ImageSlider detailData={detailData} />
          <section>
            <ProductDetailInfo detailData={detailData} />
            <ProductDetailOption detailData={detailData} />
            <ProductDetailTotal detailData={detailData} />
            <div className="productDetailbuttons">
              <button className="buyNowButton" type="button">
                BUY NOW
              </button>
              <button className="addCart" type="button">
                ADD CART
              </button>
            </div>
          </section>
        </div>
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
      </main>
    );
  }
}

export default Productdetail;
