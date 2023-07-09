import Input from '@/components/form/Input'
import Title from '@/components/ui/Title'
import React from 'react'
import { useFormik } from 'formik'
import { AdminSchema } from '@/schema/AdminSchema'
import Link from 'next/link'

const AdminLogin = () => {

    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
    };

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit,
        validationSchema: AdminSchema,
    });

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Your Username',
            value: values.username,
            errorMessage: errors.username,
            touched: touched.username
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Your Password',
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password
        }
    ]

    return (
        <div className='container mx-auto min-h-[calc(100vh_-_433px)] justify-center items-center flex'>
            <form className='flex flex-col items-center my-20 md:w-1/2 w-full mx-auto' onSubmit={handleSubmit}>
                <Title addClass={'text-[40px] mb-6'}>Admin Login</Title>
                <div className='flex flex-col gap-y-3 w-full'>
                    {inputs.map((input) => (
                        <Input
                            key={input.id}
                            {...input}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    ))}
                </div>
                <div className='flex flex-col w-full gap-y-3 mt-6'>
                    <button className='btn-primary'>LOGİN</button>
                    
                    <Link href={'/'}>
                        <span className='text-sm underline cursor-pointer text-secondary'>
                            Home Page
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AdminLogin