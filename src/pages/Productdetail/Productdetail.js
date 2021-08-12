import React from 'react';
import { withRouter } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import ProductDetailInfo from './productDetailInfo';
import ProductDetailOption from './ProductDetailOption';
import ProductDetailButtons from './ProductDetailButtons';
import Review from '../Review/Review';
import Modal from './Modal';
import { TOKEN_KEY } from '../../config.js';
import { BASE_URL } from '../../config.js';
import './Productdetail.scss';

class Productdetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailData: [],
      quantity: 1,
      modalOpen: false,
      cartText: '',
    };
  }

  openModal = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    token
      ? this.setState({ modalOpen: true })
      : alert('로그인 후 이용해주세요');
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

  openModal = () => {
    this.setState({ modalOpen: true });
    fetch(`${BASE_URL}/orders/cart`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: this.props.match.params.id,
        quantities: this.state.quantity,
      }),
      headers: {
        Authorization: localStorage.getItem(TOKEN_KEY),
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        data.MESSAGE === 'ADD'
          ? this.setState({
              cartText: '이미 있는 상품입니다. 장바구니에 추가하시겠습니까?',
            })
          : this.setState({
              cartText: '장바구니로 이동하시겠습니까?',
            });
      });
  };

  goToCart = () => {
    this.props.history.push(`/orders/cart`);
  };

  onClickPlusQuantity = () => {
    console.log(this.state.detailData[0]);
    if (this.state.detailData[0].information.stock < this.state.quantity) {
      return alert('재고수량이 부족합니다. ');
    } else {
      this.setState({ quantity: this.state.quantity + 1 });
    }
  };

  onClickMiunsQuantity = () => {
    this.setState(prevState => {
      if (prevState.quantity > 1) {
        return {
          quantity: prevState.quantity - 1,
        };
      } else {
        return alert('최소 주문수량은 1개 입니다.');
      }
    });
  };
  handleChange = e => {
    this.setState({
      quantity: e.target.value,
    });
  };

  render() {
    const { detailData, quantity, cartText } = this.state;
    const {
      handleChange,
      openModal,
      onClickPlusQuantity,
      onClickMiunsQuantity,
      goToCart,
    } = this;
    console.log(this.state.quantity);

    return (
      <main className="productDetailPage">
        <div className="productDetail">
          <ImageSlider detailData={detailData} />
          <section>
            <ProductDetailInfo detailData={detailData} />
            <ProductDetailOption
              quantity={quantity}
              detailData={detailData}
              onClickPlusQuantity={onClickPlusQuantity}
              onClickMiunsQuantity={onClickMiunsQuantity}
              handleChange={handleChange}
            />
            <ProductDetailButtons openModal={openModal} />
            {this.state.modalOpen ? (
              <Modal
                cartText={cartText}
                open={this.state.modalOpen}
                goToCart={goToCart}
                close={this.closeModal}
              />
            ) : null}
          </section>
        </div>
        <Review paramsId={this.props.match.params.id} />
      </main>
    );
  }
}

export default withRouter(Productdetail);
