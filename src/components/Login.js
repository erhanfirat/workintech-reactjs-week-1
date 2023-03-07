import axios from "axios";
import { useEffect, useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
    keepMe: false,
  });

  const mailChangeHandler = (e) => {
    setUserLogin({ ...userLogin, email: e.target.value });
  };
  const passChangeHandler = (e) => {
    setUserLogin({ ...userLogin, password: e.target.value });
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
            onChange={mailChangeHandler}
            value={userLogin.email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="user-pass">Password</Label>
          <Input
            type="password"
            name="password"
            id="user-pass"
            onChange={passChangeHandler}
            value={userLogin.password}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="user-keepme"
              onChange={keepmeChangeHandler}
              checked={userLogin.keepMe}
            />{" "}
            Keep me signed in
          </Label>
        </FormGroup>

        <Button type="button" onClick={resetForm}>
          Reset Form
        </Button>
        <Button type="submit" color="primary">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
