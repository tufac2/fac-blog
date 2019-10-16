export default (state = {
  activePage: 1,
  defaultActivePage: 1,
  firstItem: {},
  lastItem: {},
  totalPages: 10,
  limit: 1
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
