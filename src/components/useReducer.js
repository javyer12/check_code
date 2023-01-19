import React from "react";
import "../App.css";

const SECURITY_CODE = "pollito";

export function UseReducer() {
    const [ state, dispatch ] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        if (!!state.loading) {
            setTimeout(() => {
                if (state.value === SECURITY_CODE) {
                    dispatch({ type: actionTypes.confirm })
                } else {
                    dispatch({ type: actionTypes.error })
                }
            }, 3000);
        }
    }, [ state.loading, state.value ]);

    if (!state.deleted && !state.confirm) {
        return (
            <div className="useClass">
                <h2 className="reducer_Title">Eliminate UseReducer</h2>
                <p>Write down the security code please</p>
                {(state.error && !state.loading) && <p>Error❌: codigo incorrecto</p>}
                {state.loading && <p>App is loading</p>}
                <input
                    value={state.value}
                    onChange={(e) => {
                        // la e se envia por los payload para actualizar
                        console.log(e.target.value)
                        dispatch({ type: actionTypes.write, payload: e.target.value })
                    }}
                    placeholder='Security code'
                />
                <button
                    onClick={() => {
                        dispatch({ type: actionTypes.check })
                    }}>
                    Check out
                </button>
            </div>
        );
    } else if (!!state.confirm && !state.deleted) {
        return (
            <div className="useClass">
                <p>Please Confirm. Are you sure to remove your code?</p>
                <br />
                <button onClick={() => {
                    dispatch({ type: actionTypes.deleted })
                }}>delete</button>
                <button
                    onClick={() => {
                        dispatch({ type: actionTypes.reset })
                    }}>go back</button>
            </div>
        );
    }
    else {
        return (
            <div className="useClass">
                <p>Code deleted successfully</p>
                <br />
                <button onClick={() => {
                    dispatch({ type: "RESET" })
                }
                }>Reset</button>
            </div>
        );
    }
}
const initialState = {
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
}

const actionTypes = {
    confirm: "CONFIRM",
    error: "ERROR",
    check: "CHECK",
    reset: "RESET",
    deleted: "DELETE",
    write: "WRITE"
}
// const reducer = (state, action) => {

// }

// const reducer1 = (state, action) => {
// reducer con if
// if (action.type === "ERROR") {
//     return {
//         ...state,
//         error: true,
//         loading: true
//     }
// }

// reducer con switch
//     switch (action.type) {
//         case "ERROR":
//             return {
//                 ...state,
//                 error: true,
//                 loading: true
//             }
//             break;
//         case "CHECK":
//             return {
//                 ...state,
//                 loading: true,
//             }
//             break;
//         default:
//             return { ...state }
//             break;
//     }
// }

const reducerObject = (state, payload) => ({
    [ actionTypes.error ]: {
        ...state,
        error: true,
        value: "",
        loading: false
    },
    [ actionTypes.check ]: {
        ...state,
        loading: true,
    },
    [ actionTypes.confirm ]: {
        ...state,
        loading: false,
        confirm: true,
    },
    [ actionTypes.write ]: {
        ...state,
        value: payload
    },
    [ actionTypes.reset ]: {
        ...state,
        deleted: false,
        confirm: false,
        value: ""
    },
    [ actionTypes.deleted ]: {
        ...state,
        deleted: true,
    }
})

const reducer = (state, action) => {
    if (reducerObject(state)[ action.type ]) {
        return reducerObject(state, action.payload)[ action.type ]
    } else {
        return state;
    }
}