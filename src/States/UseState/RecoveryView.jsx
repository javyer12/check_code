import React from 'react';
import { useForm } from "react-hook-form";

export default function RecoveryView({ deleted, setRecoveryCode, setDeleted }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        let recovery = localStorage.getItem('useStateRecoveryCode');
        if (recovery !== data.useStateRecoveryCode) return window.confirm("Text does not match");
        let code = localStorage.getItem('useStateCode');
        window.confirm(`Your code is: ${code}`);
        setDeleted(!deleted);
        setRecoveryCode(false)
    };
    return (
        <div className='animated_class'>
            <h3>UseState!</h3>
            <div className="state_view">
                <h2>Recovery Code</h2>
                <p>Insert the description text to recover your code</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input  {...register("useStateRecoveryCode", {
                        required: "This field is required",
                        minLength: {
                            value: 5,
                            message: "Min length must be at least 5 characters"
                        }
                    })} placeholder="Insert description" />
                    <br />
                    <button className='btn_create' placeholder="Recover" >Recovery</button>
                    <br />
                    {errors.stateCode && <span>This field is required</span>}
                </form>
            </div>
        </div>
    )
}
