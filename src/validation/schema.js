import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().trim().required('Name is required'),
  email: yup.string().email('Must be a valid email address').required('Email is required'),
  password: yup.string().trim().required('Password is required'),
  tos: yup.boolean().isTrue('ToS must be accepted'),
})

export default schema
