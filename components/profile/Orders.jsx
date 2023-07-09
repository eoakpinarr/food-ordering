import React from 'react'
import { useFormik } from 'formik';
import { ProfileSchema } from '@/schema/ProfileSchema'
import Title from '../ui/Title';
import Input from '../form/Input';

const Orders = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
    };

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            fullName: '',
            phoneNumber: '',
            email: '',
            address: '',
            job: '',
            bio: ''
        },
        onSubmit,
        validationSchema: ProfileSchema,
    });
    const inputs = [
        {
            id: 1,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password
        },

        {
            id: 2,
            name: 'repassword',
            type: 'password',
            placeholder: 'Repeat password',
            value: values.repassword,
            errorMessage: errors.repassword,
            touched: touched.repassword
        },
    ]
    return (
        <form className='lg:p-8 flex-1 lg:mt-0 mt-5' onSubmit={onSubmit}>
            <Title addClass={'text-[40px]'}>Orders</Title>

        </form>
    )
}

export default Orders