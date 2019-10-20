export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            debugger
            return [...action.payload];
            break;
        default:
            return state;
            break;
    }
}