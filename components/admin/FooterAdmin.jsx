import React, { useState } from 'react'
import Title from '../ui/Title'
import Input from '../form/Input'
import { useFormik } from 'formik'
import { AdminFooterSchema } from '@/schema/AdminFooterSchema'

const FooterAdmin = () => {

    const [linkAddress, setLinkAddress] = useState()
    const [iconName, setIconName] = useState()
    const [icons, setIcons] = useState([
        "fa fa-facebook",
        "fa fa-twitter",
        "fa fa-linkedin",        
        "fa fa-instagram",
        "fa fa-pinterest"
    ])

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
    };

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            location: '',
            email: '',
            phoneNumber: '',
            desc: '',
            day: '',
            time: ''
        },
        validationSchema: AdminFooterSchema,
        onSubmit,
    });

    const inputs = [
        {
            id: 1,
            name: 'location',
            type: 'text',
            placeholder: 'Your Location',
            value: values.location,
            errorMessage: errors.location,
            touched: touched.location
        },
        {
            id: 2,
            name: 'email',
            type: 'text',
            placeholder: 'Your Email',
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email
        },
        {
            id: 3,
            name: 'phoneNumber',
            type: 'number',
            placeholder: 'Your Phone Number',
            value: values.phoneNumber,
            errorMessage: errors.phoneNumber,
            touched: touched.phoneNumber
        },
        {
            id: 4,
            name: 'desc',
            type: 'text',
            placeholder: 'Write a Description',
            value: values.desc,
            errorMessage: errors.desc,
            touched: touched.desc
        },
        {
            id: 5,
            name: 'day',
            type: 'text',
            placeholder: 'Update Day',
            value: values.day,
            errorMessage: errors.day,
            touched: touched.day
        },
        {
            id: 6,
            name: 'time',
            type: 'text',
            placeholder: 'Update Time',
            value: values.time,
            errorMessage: errors.time,
            touched: touched.time
        }
    ]

    return (
        <form className='lg:p-8 flex-1 lg:mt-0 mt-5'>
            <Title addClass={'text-[40px]'}>Footer</Title>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                {inputs.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                ))}
            </div>

            <div className='mt-4 flex md:flex-row flex-col md:items-center gap-4'>
                <div className='flex md:flex-row flex-col gap-4 items-center'>
                    <Input placeholder='Link Address' value="https://"
                        onChange={() => setLinkAddress()} />
                    <Input placeholder='Icon Name' value={iconName} defaultValue="fa fa-"
                        onChange={(e) => setIconName(e.target.value)} />
                    <button className='btn-primary' type='button'
                        onClick={() => {
                            setIcons([...icons, iconName])
                            setIconName("fa fa-")
                        }}>
                        Add
                    </button>
                    <button className='btn-primary !bg-secondary'>Update</button>
                </div>

            </div>
            <ul className='flex items-center gap-6 my-4'>
                {icons.map((icon, index) => (
                    <li className='flex items-center' key={index}>
                        <i className={`${icon} text-2xl`}></i>
                        <button className='text-danger' type='button'
                            onClick={() => setIcons((prev) => prev.filter((i) => i !== icon))}>
                            <i className='fa fa-trash text-xl ml-2'></i>
                        </button>
                    </li>
                ))}
            </ul>

        </form>
    )
}

export default FooterAdmin