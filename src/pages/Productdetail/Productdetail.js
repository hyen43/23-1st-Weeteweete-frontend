import React from 'react';
import { withRouter } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import ProductDetailInfo from './productDetailInfo';
import ProductDetailOption from './ProductDetailOption';
import ProductDetailButtons from './ProductDetailButtons';
import Review from '../Review/Review';
import Modal from './Modal';
import { BASE_URL } from '../../config.js';
import './Productdetail.scss';

class Productdetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: {},
      modalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  componentDidMount() {
    //console.log(this.props.match.params.id)
    fetch(`${BASE_URL}/products/${this.props.match.params.id}`, {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(productDetailData => {
        this.setState({
          detailData: productDetailData.RESULT,
        });
      });
  }

  render() {
    const { detailData } = this.state;
    const { openModal } = this;
    return (
      <main className="productDetailPage">
        <div className="productDetail">
          <ImageSlider detailData={detailData} />
          <section>
            <ProductDetailInfo detailData={detailData} />
            <ProductDetailOption detailData={detailData} />
            <ProductDetailButtons openModal={openModal} />
            <Modal open={this.state.modalOpen} close={this.closeModal} />
          </section>
        </div>
        <Review paramsId={this.props.match.params.id} />
      </main>
    );
  }
}

export default withRouter(Productdetail);
