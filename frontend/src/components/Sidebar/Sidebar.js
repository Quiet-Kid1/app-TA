/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React, { useState } from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';

// nodejs library to set properties for components
import { PropTypes } from 'prop-types';

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

var ps;

const Sidebar = props => {
  const [collapseOpen, setCollapseOpen] = useState();

  const noPad = {
    padding: '0px',
  };

  const noPadTOP = {
    paddingTop: '0px',
  };

  // verifies if routeName is the one active (in browser input)
  const activeRoute = routeName => {
    return props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen(data => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  const createLinks = routes => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: '_blank',
    };
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
      style={noPadTOP}
    >
      <Container fluid style={noPadTOP}>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps} style={noPad}>
            <br></br>
            <DropdownToggle className="pr-0" nav>
              <h1 className="avatar avatar-lg rounded-circle">
                <img
                  alt="..."
                  className="align-items-center"
                  src={
                    require('../../assets/img/theme/team-4-800x800.jpg').default
                  }
                />
              </h1>
              <Media className="align-items-center d-lg-block">
                Eston Suli
              </Media>
            </DropdownToggle>
          </NavbarBrand>
        ) : null}
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <img alt={logo.imgAlt} src={logo.imgSrc} />
                  ) : (
                    <a href={logo.outterLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Form */}
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {/* Divider */}
          <hr className="my-1" />
          {/* Navigation */}
          <Nav className="mb-md-3" navbar style={noPad}>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                exact
                to="/admin/user-profile"
                activeClassName="active"
              >
                <i className="ni ni-archive-2" />
                Beranda
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                exact
                to="/admin/data-set"
                activeClassName="active"
              >
                {' '}
                <i className="ni ni-align-center" />
                Dataset
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://demos.creative-tim.com/argon-dashboard-react/#/documentation/alerts?ref=adr-admin-sidebar"
                disabled
              >
                <i className="ni ni-settings-gear-65" />
                Preprocessing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                exact
                to="/admin/tf-idf"
                activeClassName="active"
              >
                {' '}
                <i className="ni ni-atom" />
                TF-IDF
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                exact
                to="/admin/data-training"
                activeClassName="active"
              >
                {' '}
                <i className="ni ni-settings" />
                Data Training
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                exact
                to="/admin/clustering"
                activeClassName="active"
              >
                {' '}
                <i className="ni ni-vector" />
                Clustering
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                exact
                to="/admin/visualization"
                activeClassName="active"
              >
                {' '}
                <i className="ni ni-chart-pie-35" />
                Visualization
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {};

Sidebar.propTypes = {};

export default Sidebar;
