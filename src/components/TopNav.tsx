import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

import "./TopNav.css";

export default class TopNav extends React.Component<any, any> {

  render() {
    return (
      <div id="top-nav" className="navbar-collapse collapse" >
        <nav>
          <ul className="nav navbar-nav" >
            <li className="nav-item" >
              <NavLink exact to="/dashboards" className="navbar-link" activeClassName="active-nav-link" >
                Dashboards
              </NavLink>
            </li>
            <li className="nav-item" >
              <NavLink exact to="/reports" className="navbar-link" activeClassName="active-nav-link" >
                Reports
              </NavLink>
            </li>
            <li className="nav-item">
            <a href="https://app.powerbi.com/Redirect?action=OpenApp&appId=fcc607da-5f8d-4728-8d83-02e0722d983e&ctid=8ed88dbb-ef3a-4f62-892f-0524d45c87b9" target="_blank">Open PowerBI In Another Tab</a>
              </li>
            <li className="nav-item" >
              <NavLink exact to="/datasets" className="navbar-link" activeClassName="active-nav-link" >
                Datasets
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

}
