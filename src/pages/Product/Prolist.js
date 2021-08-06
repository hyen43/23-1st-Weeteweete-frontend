import React, { Component } from 'react';
import './Prolist.scss';
import ProListInList from './ProListInList';
import ColorChip from './ColorChip';

class ProList extends Component {
  constructor(props) {
    super(props);
    const { prolist } = this.props;
    this.state = {
      selectColor: Array(prolist.length).fill(''),
    };
  }

  selectColorSet = (targetColor, sectionIndex) => {
    const { selectColor } = this.state;
    const selectColorArry = [...selectColor];
    selectColorArry[sectionIndex] = targetColor;
    this.setState({
      selectColor: selectColorArry,
    });
  };

  render() {
    const { prolist } = this.props;
    return (
      <div className="proList">
        {prolist.map((sectionContent, index) => {
          const colorArry = [];
          const uniqueColor = sectionContent.information.filter(
            (colorElement, i) => {
              colorArry.push(colorElement.color);
              return colorArry.indexOf(colorElement.color) === i;
            }
          );
          return (
            <div className="wrap" key={sectionContent.concpet_id}>
              <div className="description">
                <h3>{sectionContent.concept}</h3>
                <p>{sectionContent.concpet_desc}</p>
                <div className="colorFilter">
                  <ul>
                    {sectionContent.information[0].color && (
                      <ColorChip
                        uniqueColor={uniqueColor}
                        selectColorSet={this.selectColorSet}
                        sectionIndex={index}
                        colorChipstate={this.colorChipstate}
                        colorChipsactive={this.state.colorChip}
                      />
                    )}
                  </ul>
                </div>
              </div>
              <div className="list">
                <ul>
                  {sectionContent.information.map(list => {
                    return sectionContent.information[0].color ? (
                      <ProListInList
                        list={list}
                        key={list.id}
                        selectColor={this.state.selectColor[index]}
                      />
                    ) : (
                      <ProListInList list={list} key={list.id} />
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProList;
