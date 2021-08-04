import React, { Component } from 'react';
import './MainVisual.scss';

class MainVisual extends Component {
  constructor() {
    super();
    this.state = {
      visualIndex: 0,
      visualImage: [],
    };
  }

  visualContainer = React.createRef();

  visualSlide = () => {
    const { visualIndex } = this.state;
    if (visualIndex < 2) {
      this.setState({ visualIndex: visualIndex + 1 }, () => {
        this.visualContainer.current.style.transition = 'transform 2s';
        this.visualContainer.current.style.transform = `translateX(-${
          50 * visualIndex
        }%)`;
      });
    } else {
      this.setState({ visualIndex: -1 });
    }
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/VisualImageData.json')
      .then(data => data.json())
      .then(data => {
        this.setState({
          visualImage: data,
        });
      });

    setInterval(this.visualSlide, 3000);
  }
  render() {
    return (
      <div className="visualContainer" ref={this.visualContainer}>
        <div className="main">
          <div className="mainVisual">
            {this.state.visualImage.map(el => {
              return (
                <div key={el.key}>
                  <img alt={el.content} src={el.src}></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MainVisual;
