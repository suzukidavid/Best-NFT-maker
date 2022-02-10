import React from 'react'
import { withFormik, FormikErrors } from 'formik';
import Form from './Form'

const MyForm = props => {

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
  <Form 
      values={values}
      touched={touched}
      errors={errors}
      handleChange={handleChange}
      handleBlur={handleBlur}
      handleSubmit={handleSubmit}
  />
    
  );
 };
 
 // Shape of form values
  interface FormValues {
    name: string
    description: string
    validate: boolean
  }

  interface MyFormProps {
    name?: string
    description?: string
    validate?: boolean
  }

 const Content = withFormik<MyFormProps, FormValues>({
   
    mapPropsToValues: props => {
        return {
          name: props.name || '',
          description: props.description || '',
          validate: false,
        };
    },
   // Custom sync validation
   validate: values => {
     
      const errors : FormikErrors<FormValues> = {};
 
      if (!values.name) {
        errors.name = '"Name" is not allowed to be empty';
      }

      if (!values.description) {
        errors.description = '"Description" is not allowed to be empty';
      }

      if (values.name && values.description) {
        errors.validate = "true";
      }
 
    return errors;
   },
  
  handleSubmit: values => {
    // do submitting things
  },
 
 })(MyForm);

 export default Content
