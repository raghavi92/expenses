import React from 'react';
import classNames from 'classnames';
class Panel extends React.Component {
  render() {
    const {title, children, id} = {...this.props};
    return (
      <div className='panel mdl-tabs__panel' id={id}>
        <div className="title">
          <div>Prev</div>
          <div>{title}</div>
          <div>Next</div>
        </div>
        <div className="body">
          {children}
        </div>
      </div>
    );
  }
}
export default Panel;
