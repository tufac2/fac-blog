import React from 'react'
import { connect } from 'react-redux';

import { Pagination } from 'semantic-ui-react'

import { fetchPosts } from '../../actions'
class PageCounter extends React.Component {
  render(){
    return(
      <Pagination
        boundaryRange={0}
        defaultActivePage={this.props.config.defaultActivePage}
        ellipsisItem={null}
        firstItem={this.props.config.firstItem}
        lastItem={this.props.config.lastItem}
        siblingRange={1}
        totalPages={this.props.config.totalPages}
        onPageChange={(event, data) => this.props.fetchPosts(data.limit, data.activePage)}
      />
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    config: state.pageCounter
  }
}

export default connect(mapStateToProps, {
  fetchPosts
})(PageCounter);
