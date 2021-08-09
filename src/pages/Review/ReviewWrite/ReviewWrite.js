import React, { Component } from 'react';
import axios from 'axios';
import StarInput from './StarInput';
import './ReviewWrite.scss';

class ReviewWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: this.props.location.state.itemId,
      file: '',
      previewURL: '',
      text: '',
      star: 1,
    };
  }

  handleFileOnChange = e => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlePost = () => {
    const formData = new FormData();
    formData.append('image', this.state.file);
    formData.append('text', this.state.text);
    formData.append('star', this.state.star);
    formData.append('itemId', this.state.itemId);

    return axios
      .post('/api/upload', formData)
      .then(res => {
        res.json();
        alert('성공');
      })
      .catch(err => {
        alert('실패');
        for (var pair of formData.entries()) {
          console.log(pair[0] + ', >>>>>' + pair[1]);
        }
      });
  };

  handleStar = selectStar => {
    this.setState({
      star: selectStar,
    });
  };

  render() {
    let profile_preview = null;
    if (this.state.file !== '') {
      profile_preview = (
        <img
          className="profile_preview"
          alt="이미지 업로드"
          src={this.state.previewURL}
        />
      );
    }
    return (
      <form className="reviewWrite">
        <div className="reviewTitle">
          <h3>후기작성</h3>
        </div>
        <div className="starInput">
          <h3>이 아이템 어땟나요?</h3>
          <StarInput handleStar={this.handleStar} value={this.state.star} />
        </div>
        <div className="reviewInput">
          <h3>상세한 후기를 작성해주세요.</h3>
          <textarea name="text" onChange={this.handleInput}></textarea>
        </div>
        <div className="imgInput">
          <input
            type="file"
            accept="image/*"
            name="profile_img"
            onChange={this.handleFileOnChange}
            multiple
          ></input>
          {profile_preview}
        </div>
        <button type="button" onClick={this.handlePost} />
      </form>
    );
  }
}
export default ReviewWrite;
