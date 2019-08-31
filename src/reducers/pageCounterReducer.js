export default (state = {
  visitedPages: [1],
  currentPage: null,
  defaultActivePage: 1,
  firstItem: {},
  lastItem: {},
  totalPages: 10
}, action) => {
  switch (action.type) {
      case 'SET_CURRENT_PAGE':
          return action.payload;
          break;
      default:
          return state;
          break;
  }
}
