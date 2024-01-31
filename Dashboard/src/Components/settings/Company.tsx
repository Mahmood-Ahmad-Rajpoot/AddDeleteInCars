import { ErrorMessage, Field, FieldArray, Formik, Form } from "formik";
import * as Yup from "yup";
 import { Button } from "antd";

const Company = () => {
  // Yup validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required("required!"),
    mail: Yup.string().required("required!").email("invalid Format"),
    channel: Yup.string().required("required!"),
    password: Yup.string().required("required!"),
    comments: Yup.string().required("Comments required!"),
  });

  // const validate = (values: any) => {
  //   let errors: any = {};
  //   if (!values.name) {
  //     errors.name = "Required";
  //   }
  //   if (!values.mail) {
  //     errors.mail = "Required";
  //   } else if (values.mail !== "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i") {
  //     errors.mail = "Invalid mail Format";
  //   }
  //   if (!values.password) {
  //     errors.password = "Required";
  //   }
  //   if (!values.channel) {
  //     errors.channel = "Required";
  //   }

  //   return errors;
  // };
  const initialValues = {
    name: "",
    mail: "",
    channel: "",
    password: "",
    comments: "",
    phNumbers: [""],
  };
  const onSubmit = (values: any) => {
    console.log(values);
  };
  // const formik:any = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  // });

  // console.log(formik.errors);

  const inputStyles = `rounded-md bg-white h-[50px] shadow-[0_5px_20px_rgb(0,0,0,0.12)] focus:outline-none px-5 w-full`;

  return (
    <div className="flex justify-center w-full ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount={true}
      >

        {
          (formik:any)=>{
            console.log('formic prop:',formik)
            return (
              <Form className="w-1/2 flex flex-col ">
              <>
                <label htmlFor="name">Name</label>
                <Field id="name" name="name" className={inputStyles} type="text" />
                <ErrorMessage name="name" />
              </>
    
              <>
                <label htmlFor="mail">Mail</label>
                <Field id="mail" name="mail" className={inputStyles} type="text" />
                <ErrorMessage name="mail" />
              </>
    
              <>
                <label htmlFor="channel">Channel</label>
                <Field
                  id="channel"
                  name="channel"
                  className={inputStyles}
                  type="text"
                />
                <ErrorMessage name="channel">
                  {(errorMsg) => {
                    return (
                      <span className="text-[blue] bg-[grey]">{errorMsg}</span>
                    );
                  }}
                </ErrorMessage>
              </>
    
              <>
                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  name="password"
                  className={inputStyles}
                  type="text"
                />
                {/* <ErrorMessage name="password" component={ErrorComponent} /> */}
              </>
    
              <>
                <label htmlFor="comments">comments</label>
                <Field
                  as="textarea"
                  id="comments"
                  name="comments"
                  className={inputStyles + "w-auto"}
                >
                  {(values: any) => {
                    const { field, meta } = values;
                    return (
                      <div>
                        <textarea className={inputStyles} {...field} />
                        {meta.touched && meta.error ? (
                          <span className="bg-[grey] w-[50px] h-8">
                            {meta.error}
                          </span>
                        ) : null}
                      </div>
                    );
                  }}
                </Field>
              </>
    
              <>
                <label htmlFor="password">Password</label>
                <FieldArray name="phNumbers">
                  {(fieldArrayProps: any) => {
                    // destructuring
                    const { remove, push, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
    
                    return phNumbers.map((__: string, index: number) => {
                      return (
                        <div key={index} className="flex ">
                          <Field
                            className={inputStyles}
                            name={`phNumbers[${index}]`}
                          />
                          {index > 0 && (
                            <Button onClick={() => remove(index)}>-</Button>
                          )}
                          <Button onClick={() => push("")}>+</Button>
                        </div>
                      );
                    });
                  }}
                </FieldArray>
              </>
    
              <button
                className="disabled:cursor-not-allowed disabled:bg-blue-400 border bg-blue-700 rounded-xl h-[50px] mt-3 text-white"
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
            </Form>
            )
          }
        }
      
      </Formik>
    </div>
  );
};

export default Company;
