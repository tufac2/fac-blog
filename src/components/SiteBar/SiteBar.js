import React from 'react'
import { connect } from 'react-redux';

import { setSideHeader } from '../../actions'

import './siteBar.scss'

import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

class SideHeader extends React.Component {
  state = { visible: false }

  handleHideClick = () => this.props.setSideHeader(false);
  handleShowClick = () => this.props.setSideHeader(true);
  handleSidebarHide = () => this.props.setSideHeader(false);

  componentDidMount(){
    this.props.setSideHeader(false);
  }
  render() {
    const visible = this.props.visible
    const children = this.props.children

    return (
      <div className="sidebar-wrapper">
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button>
        </Button.Group>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
            className="site-nav"
          >
            <div className="my-photo">
              <img src="../../assets/img/my_photo.png" alt="image" />
              <div className="mask"></div>
            </div>
            <Menu.Item as='a'>
              <Icon name='edit' />
              Blog
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='coffee' />
              Contact
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              { children }
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { visible: state.sideHeaderStatus }
}

export default connect(mapStateToProps, {
  setSideHeader
})(SideHeader)
