import React from 'react'
import { connect } from 'react-redux';

import { Pagination } from 'semantic-ui-react'

const PageCounter = (props) => (
  <Pagination
    boundaryRange={0}
    defaultActivePage={props.currentPage}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={10}
  />
)

const mapStateToProps = (state, ownProps) => {
  return {
    currentPage: 2
  }
}

export default connect(mapStateToProps)(PageCounter);
