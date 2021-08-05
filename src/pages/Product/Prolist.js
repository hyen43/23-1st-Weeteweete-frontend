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
    const newArray = [...selectColor];
    newArray[sectionIndex] = targetColor;
    this.setState({
      selectColor: newArray,
    });
  };

  render() {
    const { prolist } = this.props;
    return (
      <div className="proList">
        {prolist.map((el, index) => {
          const colorArry = [];
          const uniqueColor = el.information.filter((el, i) => {
            colorArry.push(el.color);
            return colorArry.indexOf(el.color) === i;
          });
          return (
            <div className="wrap" key={el.concpet_id}>
              <div className="description">
                <h3>{el.concept}</h3>
                <p>{el.concpet_desc}</p>
                <div className="colorFilter">
                  <ul>
                    {el.information[0].color && (
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
                  {el.information[0].color
                    ? el.information.map(list => {
                        return (
                          <ProListInList
                            list={list}
                            key={list.id}
                            selectColor={this.state.selectColor[index]}
                          />
                        );
                      })
                    : el.information.map(list => {
                        return <ProListInList list={list} key={list.id} />;
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
