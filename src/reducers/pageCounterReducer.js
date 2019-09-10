export default (state = {
  activePage: null,
  defaultActivePage: 1,
  firstItem: {},
  lastItem: {},
  totalPages: 10,
  onPageChange: (event, {}) => {
    debugger
  }
}, action) => {
  switch (action.type) {
      case 'SET_CURRENT_PAGE':
          debugger
          return action.payload;
          break;
      default:
          return state;
          break;
  }
}
