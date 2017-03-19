import React from 'react';
import Panel from './panel';
import {Link} from 'react-router-dom';
import Tabs from './tabs';

class Dashboard extends React.Component {
    render() {
      return (
        <div className="dashboard">
          <Tabs />
          <Panel />
          <Link to="/expense">
            <button className="add-expense mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
              <i>+</i>
            </button>
          </Link>
        </div>);
    }
}
export default Dashboard;
