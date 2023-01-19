import React, { useState } from "react";
import '../App.css';


export function UseState() {

    // estado independiente
    const [ SECURITY_CODE, setSECURITY_CODE ] = useState("");
    const [ codeSaved, setCodeSaved ] = useState(false);
    const [ value, setValue ] = React.useState("");
    const [ error, setError ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(false);
    const [ confirm, setConfirm ] = React.useState(false);
    const [ deleted, setDeleted ] = React.useState(false);

    const onConfirm = () => {
        setError(false);
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
    const handleCreateCode = (codeValue) => {
        // setState({ ...state, value: e.target.value })
        setSECURITY_CODE(codeValue);
    }
    const handleReset = () => {
        setDeleted(false)
        setConfirm(false)
        setValue("")
        setCodeSaved(false)
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
    }, [ loading, value, SECURITY_CODE ]);

    if (!codeSaved) {
        return (
            <div className="useState">
                <h2>Create Code</h2>
                <p>Create your security code please</p>
                <input
                    value={SECURITY_CODE}
                    onChange={(e) => {
                        handleCreateCode(e.target.value)
                    }}
                    placeholder='Security code'
                />
                <button
                    onClick={() => {
                        setCodeSaved(true)
                    }}>
                    Create
                </button>
            </div>
        )
    }
    if (!deleted && !confirm) {
        return (
            <div className="useState">
                <h2>Eliminate UseState</h2>
                <p>Write down the security code please</p>
                {(error && !loading) && <p>Error❌: codigo incorrecto</p>}
                {loading && <p>App is loading</p>}
                <input
                    value={value}
                    onChange={(e) => {
                        handleCode(e.target.value)
                        console.log(e.target.value)
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
            <div className="useState">
                <p>Please Confirm. <br />Are you sure to remove your code?</p>
                <br />
                <button
                    onClick={() => {
                        setDeleted(true)
                        setSECURITY_CODE("")
                    }}>delete</button>
                <button
                    onClick={() => {
                        setConfirm(false)
                        setValue("")
                    }}>go back</button>
            </div>
        );
    }
    else {
        return (
            <div className="useState">
                <p>Code deleted successfully</p>
                <button onClick={handleReset}>Reset</button>
            </div>
        );
    }
}

// https://unsplash.com/collections/1218273/tech-design-office
