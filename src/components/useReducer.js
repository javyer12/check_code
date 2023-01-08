const initialState = {
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
}

const reducer = (state, action) => {

}

const reducer1 = (state, action) => {
    // if (action.type === "ERROR") {
    //     return {
    //         ...state,
    //         error: true,
    //         loading: true
    //     }
    // }
    switch (action.type) {
        case "ERROR":
            return {
                ...state,
                error: true,
                loading: true
            }
            break;
        case "CHECK":
            return {
                ...state,
                loading: true,
            }
            break;
        default:
            return { ...initialState }
            break
    }
}