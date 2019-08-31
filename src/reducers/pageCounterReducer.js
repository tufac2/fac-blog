export default (state = {
  visitedPages: [1],
  currentPage: 3
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