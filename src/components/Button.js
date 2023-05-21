import React from 'react'

export default function Button({ placeholder, style }) {
    return (
        <div>
            <button className={style} type="button" placeholder="Create">{placeholder}</button>
        </div>
    )
}
