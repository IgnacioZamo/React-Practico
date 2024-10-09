import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'

const AppForm = () => {
  return (
    <Formik
    initialValues={{message:"Ingrese su mensaje"}}
    validate ={values =>{
      let errors = {};
      if(!values.name){
        errors.name="Este campo es requerido";
        } else if (!values.email){
          errors.email = "Este campo es requerido";
        } else if(!values.message){
          errors.message="Este campo es requerido"
        }
        return errors;
      }
    }
    >
      {
        ({isSubmiting, values})=>(
          <Form>
            <div>
              <label htmlFor="name">Nombre:</label>
              <Field type="text" name="name"></Field>
              <ErrorMessage name="name" component="p"/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="text" name="email"></Field>
              <ErrorMessage name="email" component="p"/>
            </div>
            <div>
              <label htmlFor="message">Comentario:</label>
              <Field component="textarea" values={values.message} name="message"></Field>
              <ErrorMessage name="message" component="p"/>
            </div>
          </Form>
        )
      }

    </Formik>
  )
}

export default AppForm



//se instaló la dependencia formik