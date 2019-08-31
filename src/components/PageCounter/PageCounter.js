import React from 'react'
import { connect } from 'react-redux';

import { Pagination } from 'semantic-ui-react'

const PageCounter = (props) => (
  <Pagination
    boundaryRange={0}
    defaultActivePage={props.config.defaultActivePage}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={10}
  />
)

const mapStateToProps = (state, ownProps) => {
  return {
    config: state.pageCounter
  }
}

export default connect(mapStateToProps)(PageCounter);
