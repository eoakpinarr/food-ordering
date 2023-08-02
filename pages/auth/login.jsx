import Input from '@/components/form/Input'
import Title from '@/components/ui/Title'
import React from 'react'
import { useFormik } from 'formik'
import { LoginSchema } from '@/schema/LoginSchema'
import Link from 'next/link'
import { useSession, signIn, getSession } from "next-auth/react"
import { toast } from 'react-toastify'

const Login = () => {

    const { data: session } = useSession()
    console.log(session);

    const onSubmit = async (values, actions) => {

        const { email, password } = values;
        let options = { redirect: false, email, password }

        try {
            const res = await signIn("credentials", options)
            if (res.status === 200) {
                toast.success("User login succesfully!")
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
        //await new Promise((resolve) => setTimeout(resolve, 4000));
        //actions.resetForm();
    };

    const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit,
        validationSchema: LoginSchema,
    });

    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Your Email Address',
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email
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
        <div className='container mx-auto min-h-[calc(100vh_-_273px)]'>
            <form className='flex flex-col items-center md:h-1/2 md:w-1/2 w-full mx-auto ' onSubmit={handleSubmit}>
                <Title addClass={'text-[40px] mb-6'}>Login</Title>
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
                    <button className='btn-primary' type='submit'>
                        LOGİN
                    </button>
                    <button className='btn-primary !bg-secondary'
                        type='button' onClick={() => signIn("github")}>
                        <i className="fa fa-github mr-2 text-lg"></i>
                        GİTHUB
                    </button>
                    <Link href={'/auth/register'}>
                        <span className='text-sm underline cursor-pointer text-secondary'>
                            Do you no have an account?
                        </span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login