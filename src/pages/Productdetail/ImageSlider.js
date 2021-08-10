import React from 'react';
import './ImageSlider.scss';

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderIndex: 0,
    };
  }

  onChangeDetailImg = index => {
    let nextSlideIndex = index;
    if (this.props.detailData.image.length <= index) nextSlideIndex = 0;
    if (index < 0) nextSlideIndex = this.props.detailData.image.length - 1;

    this.setState({ sliderIndex: nextSlideIndex });
  };

  render() {
    const { name, image } = this.props.detailData;

    return (
      <section className="productDetail">
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
                {image?.map((img, index) => {
                  return (
                    <div className="mainSlideImg" key={index}>
                      <img alt={name} src={img} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="productSlideImgs">
              <ul>
                {image?.map((img, index) => {
                  return (
                    <li
                      className="productSlideImg"
                      key={index}
                      onClick={() => {
                        this.onChangeDetailImg(index);
                      }}
                    >
                      <img alt={name} src={img} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ImageSlider;
