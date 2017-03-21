import React from 'react';
class PanelHeader extends React.Component {
  render() {
    return (
        <div className="title">
          <div onClick={this.props.navigateThroughDates.bind(this, 'previous')}>Prev</div>
          <div>{`${this.props.fromDate}-${this.props.toDate}`}</div>
          <div onClick={this.props.navigateThroughDates.bind(this, 'next')}>Next</div>
        </div>
    );
  }
}
export default PanelHeader;
