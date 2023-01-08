import React from "react";

const SECURITY_CODE = "pollos";

export function UseState() {
    // estado compuesto
    // const [ state, setState ] = React.useState({
    //     value: "",
    //     error: false,
    //     loading: false,
    //     rightValue: false,
    // })

    // estado independiente
    const [ value, setValue ] = React.useState("");
    const [ error, setError ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(false);
    const [ confirm, setConfirm ] = React.useState(false);
    const [ deleted, setDeleted ] = React.useState(false);

    const onConfirm = () => {
        setError(false);
        // setRightValue(true);
        setConfirm(true)
    }
    const onError = () => {
        setError(true);
        setValue("");
    }
    const handleCode = (codeValue) => {
        // setState({ ...state, value: e.target.value })
        setValue(codeValue);
    }
    const handleReset = () => {
        setDeleted(false)
        setConfirm(false)
        setValue("")
    }

    React.useEffect(() => {
        if (loading) {
            setTimeout(() => {
                if (value !== SECURITY_CODE) {
                    onError()
                } else {
                    onConfirm()
                }
                setLoading(false);
            }, 3000);
        }
    }, [ loading, value ]);

    if (!deleted && !confirm) {
        return (
            <div>
                <h2>Eliminate UseState</h2>
                <p>Write down the security code please</p>
                {/* {rightValue && <p>Right👏🏻 : Correct Code </p>} */}
                {(error && !loading) && <p>Error❌: codigo incorrecto</p>}
                {loading && <p>App is loading</p>}
                <input
                    value={value}
                    onChange={(e) => {
                        handleCode(e.target.value)
                    }}
                    placeholder='Security code'
                />
                <button
                    onClick={() => {
                        // setState({ ...state, loading: true })
                        setLoading(true);
                    }}>
                    Check out
                </button>

            </div>
        );
    } else if (!!confirm && !deleted) {
        return (
            <React.Fragment>
                <p>Please Confirm. Are you sure to remove your code?</p>
                <button onClick={() => {
                    setDeleted(true)
                }}>delete</button>
                <button
                    onClick={() => {
                        setConfirm(false)
                    }}>go back</button>
            </React.Fragment>
        );
    }
    else {
        return (
            <React.Fragment>
                <p>Code deleted successfully</p>
                <button onClick={handleReset}>Reset</button>
            </React.Fragment>
        );
    }
}

// https://unsplash.com/collections/1218273/tech-design-office
