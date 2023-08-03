import Input from '@/components/form/Input'
import Title from '@/components/ui/Title'
import React from 'react'
import { useFormik } from 'formik'
import { AdminSchema } from '@/schema/AdminSchema'
import Link from 'next/link'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const AdminLogin = () => {

    const { push } = useRouter()

    const onSubmit = async (values, actions) => {
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`, values)
            if (res.status === 200) {
                console.log(res);
                actions.resetForm();
                toast.success("Admin Login Success")
                push("/admin/profile")
            }
        } catch (error) {
            console.log(error)
        }
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
        <div className='container mx-auto min-h-[calc(100vh_-_273px)] justify-center items-center flex'>
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
                    <button className='btn-primary' type='submit'>LOGİN</button>

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

//Admin giriş yaptı sayfa yenilenince tekrar giriş yapması gerekmesin diye
export const getServerSideProps = (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    if (myCookie.token === process.env.ADMIN_TOKEN) {
        return {
            redirect: {
                destination: "admin/profile",
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }

}

export default AdminLogin
