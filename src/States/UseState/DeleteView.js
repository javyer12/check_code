import React from 'react'
import Spin from '../../components/Spin';

export default function DeleteView({ error, loading, deleted, setDeleted, value, handleCode, setLoading, setRecoveryCode }) {
    return (
        <div className="useState">
            <div >
                <h2>Eliminate UseState</h2>
                <p>Write down the security code please</p>
                {(error && !loading) &&
                    <p>Error❌: codigo incorrecto</p>}

                {loading && <Spin />}
                <input
                    value={value}
                    onChange={(e) => {
                        handleCode(e.target.value)
                    }}
                    placeholder='Security code'
                />
                <button
                    onClick={() => {
                        setLoading(true);
                    }}
                    placeholder="Check Code"
                    className='btn_create'
                >Check Code</button>
                <br />
                {!deleted && (<button placeholder="Recovery Code?" className='btn_create' onClick={() => { setRecoveryCode(true); setDeleted(!deleted); console.log("worked") }} >Recovery Code?</button>)}
            </div>
        </div>
    )
}
