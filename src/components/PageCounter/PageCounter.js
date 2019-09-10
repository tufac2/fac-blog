import React from 'react'
import { connect } from 'react-redux';

import { Pagination } from 'semantic-ui-react'

class PageCounter extends React.Component {
  setNewPage (event, data) {
    debugger
    console.log(data);
    
  }
  
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
        onPageChange={(event, data) => this.setNewPage(event, data)}
      />
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    config: state.pageCounter
  }
}

export default connect(mapStateToProps)(PageCounter);
