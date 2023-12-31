import Input from '@/components/form/Input'
import Title from '@/components/ui/Title'
import React from 'react'
import { useFormik } from 'formik'
import Link from 'next/link'
import { RegisterSchema } from '@/schema/RegisterSchema'
import axios from 'axios'
import { toast } from 'react-toastify'

const Register = () => {

    const onSubmit = async (values, actions) => {

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, values);
            if (res.status === 200) {
                toast.success("User created succesfully!")
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }

        //await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
    };

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit,
        validationSchema: RegisterSchema,
    });

    const inputs = [
        {
            id: 1,
            name: 'fullName',
            type: 'text',
            placeholder: 'Your Full Name',
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Your Email',
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Your Password',
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password
        },
        {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Your Password Again',
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword
        },
    ]

    return (
        <div className='container mx-auto min-h-[calc(100vh_-_273px)]'>
            <form className='flex flex-col items-center md:w-1/2 w-full mx-auto' onSubmit={handleSubmit}>
                <Title addClass={'text-[40px] mb-6'}>Register</Title>
                <div className='flex flex-col gap-y-3 w-full '>
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
                    <button className='btn-primary' type='submit'>REGİSTER</button>
                    <Link href={'/auth/login'}>
                        <span className='text-sm underline cursor-pointer text-secondary'>
                            Do you have an account?
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register