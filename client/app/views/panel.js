import React from 'react';
import classNames from 'classnames';
class Panel extends React.Component {
  render() {
    const {title, children, id, active} = {...this.props};
    const classes = classNames(
      'panel', 'mdl-tabs__panel', {'is-active' : active
    });
    return (
      <div className={classes} id={id}>
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
