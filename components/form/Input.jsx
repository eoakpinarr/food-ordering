import React from 'react'

const Input = () => {
    return (
        <div className='w-full'>
            <label className='relative block cursor-text w-full'>
                <input required type='text' className='h-14 w-full pt-2
                border border-primary outline-none px-4 peer'/>
                <span className='absolute top-0 left-0 px-4 peer-valid:h-6
                text-sm h-full flex items-center peer-focus:h-6 peer-valid:text-xs
                peer-focus:text-xs peer-focus:transition-all'>
                    Email
                </span>
            </label>
        </div>
    )
}

export default Input