export default (state = true, action) => {
  debugger
  switch (action.type) {
    case 'SET_SIDE_HEADER':
      return action.payload
      break;
    default:
      return state
      break;
  }
}