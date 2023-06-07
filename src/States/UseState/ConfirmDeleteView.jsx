import React from 'react'

export default function ConfirmDeleteView({ handleRemove, setConfirm, setValue }) {
    return (
        <div className='animated_class' >
            <div className="state_view">
                <p>Please Confirm. <br />Are you sure to remove your code?</p>
                <br />
                <button
                    className='btn_create'
                    onClick={handleRemove}>delete</button>
                <button
                    className='btn_create'
                    onClick={() => {
                        setConfirm(false)
                        setValue("")
                    }}>go back</button>
            </div>
        </div>
    )
}
