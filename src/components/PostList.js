import React from 'react';
import { connect } from 'react-redux';

import { selectPost, fetchPosts, fetchUser } from '../actions'
import PostCard from './PostCard';
import { log } from 'util';

class PostList extends React.Component {
  
  componentDidMount(){
    this.props.fetchPosts();
  }

  getUser(id) {
    return this.props.userId === id
  }
  renderList(){
    console.log(this.props.pagination.firstIndex);
    console.log(this.props.pagination.lastIndex);
    console.log(this.props.posts);
    
    return this.props.posts.map((data, index) => {
      if(index >= this.props.pagination.firstIndex && index <= this.props.pagination.lastIndex){
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