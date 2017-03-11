import React from 'react';
const Panel = ({title}) => {
  return (
    <div className="panel">
      <div className="title">
        <div>Prev</div>
        <div>{title}</div>
        <div>Next</div>
      </div>
      <div className="body">
        {this.props.children}
      </div>
    </div>
  );
}
export default Panel;
