import * as React from 'react';
import './ViewHome.css';

export default class ViewHome extends React.Component<any, any> {
  render() {
    return (
      <div id="view-home" className="content-body" >
        <div className="row">
          <div className="jumbotron col">
            <h3>Conduent Health Portal Application</h3>
            <p>This is a demo of a single page application (SPA) that use React.js and Power BI Embedding.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>Real-Time Analytics for Your Business</h4>
            <a href="https://app.powerbi.com/Redirect?action=OpenApp&appId=fcc607da-5f8d-4728-8d83-02e0722d983e&ctid=8ed88dbb-ef3a-4f62-892f-0524d45c87b9" target="_blank">Click me</a>
            <div>Never make a bad decision with <strong>real-time analytics</strong> from your Power BI Dashboard & Reports. 
            </div>
          </div>
          <div className="col">
            <h4>Power BI</h4>
            <div>Learning how to develop with Power BI embedding will help you integrate professional looking reports and dashboards into your custom applications.</div>
          </div>
        </div>
      </div>
    );
  }
}
