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
    if (this.props.detailData.image.length <= index) index = 0;
    if (index < 0) index = this.props.detailData.image.length - 1;

    this.setState({ sliderIndex: index });
  };

  render() {
    const { detailData } = this.props;
    console.log(detailData);
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
                {detailData.image?.map((img, index) => {
                  return (
                    <div className="mainSlideImg" key={index}>
                      <img alt={detailData.name} src={img} />
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
                {detailData.image?.map((img, index) => {
                  return (
                    <li
                      className="productSlideImg"
                      key={index}
                      onClick={() => {
                        this.onChangeDetailImg(index);
                      }}
                    >
                      <img alt={detailData.name} src={img}></img>
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
