import React from 'react'
import { useFormik } from 'formik';
import { NewPassword } from '@/schema/NewPassword'
import Title from '../ui/Title';
import Input from '../form/Input';

const Password = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
    };
    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        onSubmit,
        validationSchema: NewPassword,
    });
    const inputs = [
        {
            id: 1,
            name: 'password',
            type: 'password',
            placeholder: 'Your Password',
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password
        },
        {
            id: 2,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Your Confirm Password',
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword
        },
    ]

    return (
        <form className='lg:p-8 flex-1 lg:mt-0 mt-5' onSubmit={handleSubmit}>
            <Title addClass={'text-[40px]'}>Change Password</Title>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
                {inputs.map((input) => (
                    <Input

                        onBlur={handleBlur}
                        onChange={handleChange}
                        key={input.id}
                        {...input}
                    />
                ))}
            </div>
            <button className='btn-primary my-4' type='submit'>Update</button>
        </form>
    )
}

export default Password