import React from 'react';
import { connect } from 'react-redux';

import { selectPost, fetchPosts } from '../actions'

class PostList extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  renderList(){
    return this.props.posts.map((post) => {
      return (
        <div
          className="ui card"
          key={post.title}
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
              22 Friends
            </a>
          </div>
        </div>
      );
    });
  }
  render(){
    return(
      <div>
        {this.renderList()}
      </div>
    )
  }
}


// Take the State, make the logic and set in this component's props
const mapStateToProps = (state) => {
  return { posts: state.posts } ;
  
}

export default connect(mapStateToProps, {
  selectPost, fetchPosts
})(PostList);