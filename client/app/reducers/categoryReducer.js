const defaultState = {
  items: []
}
const categories = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_CATOGORIES':
      return {...state, items: action.categories };
    break;
  }
  return state;
}
export default categories;
