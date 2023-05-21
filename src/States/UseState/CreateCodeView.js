import React from 'react'

export default function CreateCodeView({ handleSubmit, onSubmit, register, errors }) {
    return (
        <div className="useState">
            <h3>UseState!</h3>
            <div className="state_view">
                <h2>Create Code</h2>
                <p>Create your security code please</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("stateCode", {
                        required: "This field is required",
                        minLength: {
                            value: 5,
                            message: "Min length must be at least 5 characters"
                        }
                    })} placeholder="Insert Code" />
                    <br />
                    <input  {...register("stateCodeDescription", {
                        required: "This field is required",
                        minLength: {
                            value: 9,
                            message: "Min length must be at least 9 characters"
                        }
                    })} placeholder="Insert a description"
                    />
                    <br />

                    <button className='btn_create' placeholder="Create" >Create</button>
                    <br />
                    {errors.stateCode || errors.stateCodeDescription && <span>This field is required</span>}
                </form>
            </div>
        </div>
    )
}
