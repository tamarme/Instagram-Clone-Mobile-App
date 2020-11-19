const LogInReducer = (state = false, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return true;
        case 'NOT_LOGGED_IN':
            return false;
        default:
            return false;
    }
}

export default LogInReducer