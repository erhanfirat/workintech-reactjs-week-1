import axios from "axios";
import { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  FormFeedback,
} from "reactstrap";
import * as Yup from "yup";

const UserForm = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
    keepMe: false,
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    keepMe: "",
  });

  const [disableButton, setDisableButton] = useState(true);

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email address.")
      .required("Must include email address."),
    password: Yup.string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
    keepMe: Yup.boolean(),
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setUserLogin({ ...userLogin, [name]: value });
  };

  const keepmeChangeHandler = (e) => {
    setUserLogin({ ...userLogin, keepMe: e.target.checked });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("https://mockworker.com/login", userLogin).then((res) => {
      console.log("login res data > ", res.data);
    });
  };

  const resetForm = () => {
    setUserLogin({
      email: "",
      password: "",
      keepMe: false,
    });
  };

  useEffect(() => console.log(userLogin), [userLogin]);

  useEffect(() => {
    /* We pass the entire state into the entire schema, no need to use reach here.
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */
    formSchema.isValid(userLogin).then((valid) => {
      setDisableButton(!valid);
    });
    console.log(userLogin, formErrors);
  }, [userLogin]);

  return (
    <div className="login-form p-3 border border-primary-subtle rounded shadow ">
      <h2 className="text-primary">Login Form</h2>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label for="user-mail">Email</Label>
          <Input
            type="email"
            name="email"
            id="user-mail"
            placeholder="abc@abc.com"
            onChange={changeHandler}
            value={userLogin.email}
            invalid={formErrors.email}
          />
          <FormFeedback>{formErrors.email}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="user-pass">Password</Label>
          <Input
            type="password"
            name="password"
            id="user-pass"
            onChange={changeHandler}
            value={userLogin.password}
            invalid={formErrors.password}
          />
          <FormFeedback>{formErrors.password}</FormFeedback>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="user-keepme"
              name="keepMe"
              onChange={keepmeChangeHandler}
              checked={userLogin.keepMe}
            />{" "}
            Keep me signed in
          </Label>
        </FormGroup>

        {disableButton && (
          <ul>
            {Object.keys(formErrors).map((key) =>
              formErrors[key] ? <li>{formErrors[key]}</li> : ""
            )}
          </ul>
        )}

        <Button type="button" onClick={resetForm}>
          Reset Form
        </Button>
        <Button type="submit" color="primary" disabled={disableButton}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
