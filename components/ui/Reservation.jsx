import React from 'react'
import Input from '../form/Input'
import Title from './Title'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ReservationSchema } from '@/schema/ReservationSchema'

const Reservation = () => {

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      persons: '',
      date: ''
    },
    onSubmit,
    validationSchema: ReservationSchema,
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
      name: 'phoneNumber',
      type: 'number',
      placeholder: 'Your Phone Number',
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'Your Email Address',
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email
    },
    {
      id: 4,
      name: 'persons',
      type: 'number',
      placeholder: 'How Many Persons ?',
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons
    },
    {
      id: 5,
      name: 'date',
      type: 'datetime-local',
      placeholder: '',
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date
    },
  ]
  return (
    <div className='container mx-auto py-[48px]'>
      <Title addClass={'text-[30px] mb-10'}>Book A Table</Title>
      <div className='flex flex-wrap-reverse justify-between gap-x-10'>
        <form className='lg:flex-1 w-full' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-y-2'>
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))
            }
          </div>
          <button type='submit' className='btn-primary my-4' >BOOK NOW</button>
        </form>
        <div className='lg:flex-1 !h-[384px] w-full mb-5'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48979.85828551356!2d32.7514861216797!3d39.89123300000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d345d9d434d213%3A0x5e5858586f0c50e9!2sYummy%20Burger%20House!5e0!3m2!1str!2str!4v1687351029579!5m2!1str!2str"
            width="100%"
            height="100%"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Reservation