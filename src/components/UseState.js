import React from "react";

const SECURITY_CODE = "pollos";

export function UseState() {
    const [ value, setValue ] = React.useState("");
    const [ rightValue, setRightValue ] = React.useState(false);
    const [ error, setError ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(false);

    React.useEffect(() => {
        if (loading) {
            setTimeout(() => {
                if (value !== SECURITY_CODE) {
                    setError(true);
                    setValue(" ");
                } else {
                    setError(false);
                    setRightValue(true);
                }
                setLoading(false);
            }, 3000);
        }
    }, [ loading, value ]);

    return (
        <div>
            <h2>Eliminate UseState</h2>
            <p>Write down the security code please</p>
            {rightValue && <p>Right👏🏻 : Correct Code </p>}
            {(error && !loading) && <p>Error❌: codigo incorrecto</p>}
            {loading && <p>App is loading</p>}
            <input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                placeholder='"Security code'
            />
            <button
                onClick={() => {
                    setLoading(true);
                }}
            >
                Check out
            </button>
            {rightValue && (
                <button onClick={() => {
                    setRightValue(false);
                    setValue(" ");
                }}>Refresh</button>
            )}
        </div>
    );
}

// https://unsplash.com/collections/1218273/tech-design-office
