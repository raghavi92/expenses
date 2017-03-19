import React from 'react';
import PanelBody from './panelBody';
import PanelHeader from './panelHeader';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

class Panel extends React.Component{
  render() {
    return (
      <div>
        <PanelHeader />
        <PanelBody />
      </div>
    )
  }
}
export default Panel;
