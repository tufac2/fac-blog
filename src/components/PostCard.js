import React from 'react';
import { connect } from 'react-redux';

import { selectPost } from '../actions';

const PostCard = ({ post }) => {
  return (
    <div
    className="ui card"
    onClick={() => this.props.selectPost(post)}
  >
    <div className="image">
      <img src="" />
    </div>
    <div className="content">
      <a className="header">
        {post.title}
      </a>
      <div className="meta">
        <span className="date">Joined in 2013</span>
      </div>
      <div className="description">
        {post.description}
      </div>
    </div>
    <div className="extra content">
      <a>
        <i className="user icon"></i>
      </a>
    </div>
  </div>   
  );
}


export default connect()(PostCard)