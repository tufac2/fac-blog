import React from 'react'

const Header = () => (
  <div id="site_header" className="ui three item menu header">
    <div className="my-photo">
      <img src="images/my_photo.jpg" alt="image" />
      <div className="mask"></div>
    </div>
    <div className="site-title-block">
      <h1 className="site-title">Fabián Almenara</h1>
      <p className="site-description">Organizational change for a better project management</p>
      <a href="https://lmpixels.com/demo/sunshine-demo/sunshine-version-1/sunshine-v1-html-template/index.html#blog"></a>
    </div>
    <a className="menu-toggle mobile-visible">
      <i className="fa fa-bars"></i>
    </a>
  </div>
)

export default Header;
