import React from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'

const AppForm = () => {
  return (
    <Formik
    initialValues={{message:"Ingrese su mensaje"}} //valor inicial
    validate ={values =>{ //validate -> para indicar que un campo es obligatorio
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
    onSubmit={
      (values, { setSubmitting })=>{   //VALUES = Funcion que sucederá, una vez se de al boton de submit || SETSUBMITTING = dispatch que cambiará de estado false a true 'isSubmitting', para controlar el boton al hacer submit
        //console.log(values)
        let url = "https://formspree.io/f/mvgopnwp"
        let formData = new FormData();
        formData.append("name",values.name);
        formData.append("email",values.email);
        formData.append("message",values.message);

        fetch (url,{
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          setSubmitting(false);
          alert("Su comentario ha sido enviado");
        })
      }
    }
    >
      {
        ({isSubmitting, values})=>(
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
              <Field component="textarea" value={values.message} name="message"></Field>
              <ErrorMessage name="message" component="p"/>
            </div>
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting ? "Enviado" : "Enviar mensaje"}
            </button>
          </Form>
        )
      }

    </Formik>
  )
}

export default AppForm



//se instaló la dependencia formik

//formspree-cuenta: ignaciozamo1@gmail.com || pass= una mayuscula, caracter especial