import React from 'react';
import './ImageSlider.scss';

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderIndex: 0,
      productSlideImg: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/productDetail.json', {})
      .then(res => res.json())
      .then(data => {
        this.setState({
          productSlideImg: data,
        });
      });
  }

  onChangeDetailImg = index => {
    if (this.state.productSlideImg.length <= index) index = 0;
    if (index < 0) index = this.state.productSlideImg.length - 1;

    this.setState({ sliderIndex: index });
  };

  render() {
    const { productSlideImg } = this.state;
    return (
      <div className="productDetail">
        <div className="ProductDetailImgTable">
          <div className="productDetailImg">
            <div className="mainSlide">
              <div
                className="mainSlideImgs"
                style={{
                  transform: `translate3d(${
                    -500 * this.state.sliderIndex
                  }px,0px,0px)`,
                }}
              >
                {productSlideImg?.map((element, index) => {
                  return (
                    <div className="mainSlideImg" key={index}>
                      <img alt={element.content} src={element.src} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* // <img
            //   id="mainSlideImg"
            //   alt="mainSlide"
            //   src="images/motemoteDetailImg1.jpg"
            // /> */}
            <div className="productSlideImgs">
              <ul>
                {productSlideImg?.map((element, index) => {
                  return (
                    <li
                      className="productSlideImg"
                      key={element.key}
                      onClick={() => {
                        this.onChangeDetailImg(index);
                      }}
                    >
                      <img alt={element.content} src={element.src}></img>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ImageSlider;
