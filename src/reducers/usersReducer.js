export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}