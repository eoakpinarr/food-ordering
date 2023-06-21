import React from 'react'

const Input = (props) => {
    const { type, placeholder, errorMessage, touched, ...inputProps } = props
    return (
        <div className='w-full'>
            <label className='relative block cursor-text w-full'>
                <input required type={type} className={`h-14 w-full pt-2
                border outline-none px-4 peer 
                ${type === 'datetime-local' && "py-2"} 
                ${touched && errorMessage ?
                        "border-red-500" : "border-primary"}`} {...inputProps} />
                {type !== 'datetime-local' && (
                    <span className='absolute top-0 left-0 px-4 peer-valid:h-6
                text-sm h-full flex items-center peer-focus:h-6 peer-valid:text-xs
                peer-focus:text-xs peer-focus:transition-all'>
                        {placeholder}
                    </span>
                )}


            </label>
            {
                touched && <span className='text-danger text-xs'>{errorMessage}</span>
            }
        </div>
    )
}

export default Input