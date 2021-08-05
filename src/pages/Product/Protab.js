import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Protab.scss';

class ProTab extends Component {
  render() {
    return (
      <div className="proTab">
        <div className="depth1">
          <ul>
            {DEPTH_1.map(el => {
              return (
                <li key={el.id} className={el.active ? 'active' : ''}>
                  <Link to={`productDetial/planner/${el.id}`}>
                    {el.content}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="depth2">
          <ul>
            {DEPTH_2.map(el => {
              return (
                <li key={el.id} className={el.active ? 'active' : ''}>
                  <Link to={`productDetial/planner/s/${el.id}`}>
                    {el.content}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const DEPTH_1 = [
  { id: 0, content: '텐미닛 플래너', active: true },
  { id: 1, content: '태스크 매니저', active: false },
  { id: 2, content: '플랜 보드', active: false },
  { id: 3, content: '다이어리 캘린더', active: false },
];

const DEPTH_2 = [
  { id: 0, content: '31DAYS', active: true },
  { id: 1, content: '100DAYS', active: false },
  { id: 2, content: 'HALF YEAR', active: false },
];

export default ProTab;
