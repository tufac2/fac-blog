import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setSideHeader } from '../../actions'

import contactPage from '../../pages'

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
    const image = require('../../assets/img/my_photo.png')
    return (
      <div>
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
                <img src={image} alt="image" />
                <div className="mask"></div>
              </div>
              <Menu.Item as='div'>
                <Icon name='edit' />
                <Link to="/">
                  Inicio
                </Link>
              </Menu.Item>
              <Menu.Item as='div'>
                <Icon name='coffee' />
                <Link to="/contact">
                  Contact
                </Link>
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                { children }
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
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
