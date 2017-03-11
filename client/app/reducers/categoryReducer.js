import _ from 'lodash';
const defaultState = {
  items: []
}
const categories = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_CATOGORIES':
      return {...state, items: action.categories };
    case 'ADD_CATEGORY':
      return {...state, items: _.concat(state.items,action.category)};
  }
  return state;
}
export default categories;
