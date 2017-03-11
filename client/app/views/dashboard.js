import React from 'react';
import Panel from './panel';
class Dashboard extends React.Component {
    render() {
        return (
          <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
            <div className="mdl-tabs__tab-bar">
                <a href="#daily" className="mdl-tabs__tab is-active">Daily</a>
                <a href="#weekly" className="mdl-tabs__tab">Weekly</a>
                <a href="#monthly" className="mdl-tabs__tab">Monthly</a>
            </div>
            <Panel title='12-12-2017'>
              <div>hello</div>
            </Panel>
          </div>);
    }
}
export default Dashboard;
