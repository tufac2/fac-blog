const initialState = {
  activePage: 1,
  defaultActivePage: 1,
  firstItem: {},
  lastItem: {},
  totalPages: 10,
  limit: 3,
  firstIndex: 0,
  lastIndex: 2
}
export default (state = initialState, action) => {
  switch (action.type) {
      case 'SET_ACTIVE_PAGE':
          return {
            activePage: action.payload,
            defaultActivePage: 1,
            firstItem: {},
            lastItem: {},
            totalPages: 10,
            limit: 3,
            firstIndex: action.payload.firstIndex,
            lastIndex: action.payload.lastIndex
          };
          break;
      default:
          return state;
          break;
  }
}
