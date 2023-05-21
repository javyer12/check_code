import React, { useState } from "react";
import { useForm } from "react-hook-form";

import '../App.css';
import '../styles/MainState.css';

// states components
import RecoveryView from '../States/UseState/RecoveryView';
import DeleteView from '../States/UseState/DeleteView';
import ConfirmDeleteView from "../States/UseState/ConfirmDeleteView";
import CreateCodeView from "../States/UseState/CreateCodeView";

export function UseState() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [ SECURITY_CODE, setSECURITY_CODE ] = useState("");
    const [ recoveryCode, setRecoveryCode ] = useState(false);
    const [ value, setValue ] = React.useState("");
    const [ error, setError ] = React.useState(false);
    const [ loading, setLoading ] = React.useState(false);
    const [ confirm, setConfirm ] = React.useState(false);
    const [ deleted, setDeleted ] = React.useState(false);

    const token = localStorage.getItem("useStateCode") ? true : false;

    const onSubmit = data => {
        localStorage.setItem("useStateCode", data.stateCode);
        localStorage.setItem("useStateRecoveryCode", data.stateCodeDescription);
        setSECURITY_CODE(data.stateCode);
        setValue("")
        setRecoveryCode(true);
    };

    const onConfirm = () => {
        setError(false);
        setConfirm(true)
    }
    const onError = () => {
        setError(true);
        setValue("");
    }
    const handleCode = (codeValue) => {
        setValue(codeValue);
    }
    const handleReset = () => {
        setDeleted(false)
        setConfirm(false)
        setValue("")
        setSECURITY_CODE("");
    }
    const handleRemove = () => {
        localStorage.removeItem("useStateCode");
        localStorage.removeItem("useStateRecoveryCode");
        setDeleted(true)
        setValue("")
        setSECURITY_CODE("");
        window.location.reload()
    }
    React.useEffect(() => {
        if (loading) {
            let code = localStorage.getItem("useStateCode");
            setTimeout(() => {
                if (value !== code) {
                    onError()
                } else {
                    onConfirm()
                }
                setLoading(false);
            }, 3000);
        }
    }, [ loading, value, SECURITY_CODE ]);

    console.log(recoveryCode)
    if (SECURITY_CODE === "" && !token) {
        return (
            <>
                <CreateCodeView handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} errors={errors} />
            </>
        )
    }
    if (!deleted && !confirm && token) {
        return (
            <>
                <DeleteView error={error} loading={loading} deleted={deleted} setDeleted={setDeleted} value={value} handleCode={handleCode} setLoading={setLoading} setRecoveryCode={setRecoveryCode} />
            </>
        );
    }
    else if (!!confirm && !deleted) {
        return (
            <>
                <ConfirmDeleteView handleRemove={handleRemove} setConfirm={setConfirm} setValue={setValue} />
            </>
        );
    }
    else if (recoveryCode) {
        return (
            <>
                <RecoveryView deleted={deleted} setDeleted={setDeleted} setRecoveryCode={setRecoveryCode} />
            </>
        )
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
