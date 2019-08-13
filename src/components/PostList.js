import React from 'react';
import { connect } from 'react-redux';

import { selectPost, fetchPosts } from '../actions'
import { log } from 'util';

class PostList extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  renderList(){
    return this.props.posts.map((post) => {
      const data = post.data()
      return (
        <div
          className="ui card"
          key={post.id}
          onClick={() => this.props.selectPost(post)}
        >
          <div className="image">
            <img src="" />
          </div>
          <div className="content">
            <a className="header">
              {data.title}
            </a>
            <div className="meta">
              <span className="date">Joined in 2013</span>
            </div>
            <div className="description">
              {data.description}
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
    console.log(this.props.posts);
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