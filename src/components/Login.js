import React from 'react'
import { Formik } from 'formik'

function login() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            style={{ height: '30px', width: '280px' }}
            type='email'
            name='email'
            placeholder='Enter email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <br />
          {errors.email && touched.email && errors.email}
          <input
            style={{ height: '30px', width: '280px' }}
            type='password'
            name='password'
            placeholder='Enter password'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <br />
          {errors.password && touched.password && errors.password}
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  )
}

export default login
