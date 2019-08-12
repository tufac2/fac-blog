import React from 'react';
import { connect } from 'react-redux';

import { selectPost } from '../actions'

const PostDetail = ({ post }) => {
  if(post){
    return(
      <div>
        {post.title}
      </div>
    )
  }
  return null;
}


// Take the State, make the logic and set in this component's props
const mapStateToProps = (state) => {
  return { post: state.selectedPost } ;
  
}

export default connect(mapStateToProps)(PostDetail);