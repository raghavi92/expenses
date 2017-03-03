import React from 'react';
class Expense extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="demo-card-square mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <h5 className="mdl-card__title-text">Record your expense</h5>
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="title" />
            <label className="mdl-textfield__label" htmlFor="title">Title</label>
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="number" id="amount" />
            <label className="mdl-textfield__label" htmlFor="amount">Amount</label>
          </div>
          <div className="mdl-card__actions">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Submit
            </a>
          </div>
        </div>
      </div>);
  }
}
export default Expense;
