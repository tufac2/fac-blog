import React from 'react';
import { connect } from 'react-redux';

import { selectPost, fetchPosts, fetchUser } from '../actions'
import PostCard from './PostCard';
import { log } from 'util';

class PostList extends React.Component {
  
  componentDidMount(){
    this.props.fetchPosts();
  }
  getPostIndex(){
    const first = (this.props.pagination.activePage * this.props.pagination.limit) - this.props.pagination.limit
    const last = first + (this.props.pagination.limit -1)
    return {
      firstPostIndex: first, lastPostIndex: last
    }
  }
  getUser(id) {
    return this.props.userId === id
  }
  renderList(){
    console.log(this.getPostIndex().firstPostIndex);
    console.log(this.getPostIndex().lastPostIndex);
    console.log(this.props.posts);
    
    return this.props.posts.map((data, index) => {
      debugger
      if(index >= this.getPostIndex().firstPostIndex && index <= this.getPostIndex().lastPostIndex){
        return (
          <div className="column" key={data.title}>
            <PostCard post={ data } />
          </div>
        );
      }
    else return true;
    });
  }
  render(){
    return(
      <div className="center aligned row">
        {this.renderList()}
      </div>
    )
  }
}


// Take the State, make the logic and set in this component's props
const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts,
    users: state.users,
    pagination: state.pageCounter
  }
}

export default connect(mapStateToProps, {
  selectPost, fetchPosts
})(PostList);