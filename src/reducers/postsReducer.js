export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload.docs;
            break;
        default:
            return state;
            break;
    }
}