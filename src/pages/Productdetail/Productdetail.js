import React from 'react';
import ImageSlider from './ImageSlider';
import ProductDetailInfo from './productDetailInfo';
import ProductDetailOption from './ProductDetailOption';
import ProductDetailButtons from './ProductDetailButtons';
import ProductDetailDescription from './ProductDetailDescription';
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
      .then(productDetailData => {
        this.setState({
          detailData: productDetailData[0],
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
            <ProductDetailButtons />
          </section>
        </div>
        <ProductDetailDescription />
      </main>
    );
  }
}

export default Productdetail;
