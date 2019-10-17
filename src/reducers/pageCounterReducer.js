const initialState = {
  activePage: 1,
  defaultActivePage: 1,
  firstItem: {},
  lastItem: {},
  totalPages: 10,
  limit: 1
}
export default (state = initialState, action) => {
  switch (action.type) {
      case 'SET_NEW_PAGE':
          return {
            activePage: action.payload,
            defaultActivePage: 1,
            firstItem: {},
            lastItem: {},
            totalPages: 10,
            limit: 1
          };
          break;
      default:
          return state;
          break;
  }
}
