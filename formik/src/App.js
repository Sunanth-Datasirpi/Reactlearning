import "./App.css";
import { useFormik, Formik, Form, Field } from "formik";
import { signupValidation } from "./SignupValidation";

const intialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};
function App() {
  return (
    <div className="App">
      <Formik initialValues={intialValues} validationSchema={signupValidation}>
        {({ errors }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <br />
            <Field type="text" name="name"></Field>
            <br />
            {errors.name && <small>{errors.name}</small>}
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <Field type="email" name="email"></Field>
            <br />
            {errors.email && <small>{errors.email}</small>}
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <Field type="password" name="password"></Field>
            <br />
            {errors.password && <small>{errors.password}</small>}
            <br />

            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <Field type="cpassword" name="cpassword"></Field>
            <br />
            {errors.cpassword && <small>{errors.cpassword}</small>}
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
