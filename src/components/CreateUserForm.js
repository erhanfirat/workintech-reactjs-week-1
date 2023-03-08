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

const CreateUserForm = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    above18: false,
    type: "",
  });
  const [userFormErrors, setUserFormErrors] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    above18: "",
    type: "",
  });
  const [disableButton, setDisableButton] = useState(true);

  const userFormSchema = Yup.object().shape({
    name: Yup.string().required("İsim alanı zorunludur."),
    email: Yup.string()
      .email("Geçerli bir email adresi girin.")
      .required("Email alanı zorunludur."),
    password: Yup.string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
    gender: Yup.string(),
    above18: Yup.boolean().oneOf([true], "18 yaş üstü olmak gereklidir."),
    type: Yup.string().required("Tip alanı seçilmek zorundadır."),
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    Yup.reach(userFormSchema, name)
      .validate(value)
      .then((valid) => {
        setUserFormErrors({ ...userFormErrors, [name]: "" });
      })
      .catch((err) => {
        setUserFormErrors({ ...userFormErrors, [name]: err.errors[0] });
      });

    setUserForm({ ...userForm, [name]: value });
  };

  const checkboxChangeHandler = (e) => {
    const { name, checked } = e.target;

    Yup.reach(userFormSchema, name)
      .validate(checked)
      .then((valid) => {
        setUserFormErrors({ ...userFormErrors, [name]: "" });
      })
      .catch((err) => {
        setUserFormErrors({ ...userFormErrors, [name]: err.errors[0] });
      });

    setUserForm({ ...userForm, [name]: checked });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("https://mockworker.com/login", userForm).then((res) => {
      console.log("login res data > ", res.data);
    });
  };

  const resetForm = () => {};

  useEffect(() => {
    console.log(userForm);
    userFormSchema.isValid(userForm).then((valid) => setDisableButton(!valid));
  }, [userForm]);

  useEffect(() => {
    console.error(" USER FORM ERRORS > ", userFormErrors);
  }, [userFormErrors]);

  return (
    <div className="login-form p-3 border border-primary-subtle rounded shadow ">
      <h2 className="text-primary">Create User Form</h2>
      <Form onSubmit={submitHandler}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={changeHandler}
            value={userForm.name}
            invalid={userFormErrors.name}
            className={
              userFormErrors.name ? "error border-red " : " border-black"
            }
          />
          <FormFeedback>{userFormErrors.name}</FormFeedback>
          {userFormErrors.name && <div className="text-small color-red">{userFormErrors.name}</div>}
        </FormGroup>
        <FormGroup>
          <Label for="user-mail">Email</Label>
          <Input
            type="email"
            name="email"
            id="user-mail"
            placeholder="abc@abc.com"
            onChange={changeHandler}
            value={userForm.email}
            invalid={userFormErrors.email}
          />
          <FormFeedback>{userFormErrors.email}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="gender">Male</Label>
          <Input
            type="radio"
            name="gender"
            id="gender"
            onChange={changeHandler}
            value={"male"}
          />
          <Label for="gender">Female</Label>
          <Input
            type="radio"
            name="gender"
            id="gender-2"
            onChange={changeHandler}
            value={"female"}
          />
        </FormGroup>
        <FormGroup>
          <Label for="user-pass">Password</Label>
          <Input
            type="password"
            name="password"
            id="user-pass"
            onChange={changeHandler}
            value={userForm.password}
            invalid={userFormErrors.password}
          />
          <FormFeedback>{userFormErrors.password}</FormFeedback>
        </FormGroup>
        <FormGroup check>
          <Label check>I'm above 18.</Label>
          <Input
            type="checkbox"
            name="above18"
            id="above18"
            onChange={checkboxChangeHandler}
            checked={userForm.above18}
            invalid={userFormErrors.above18}
          />
          <FormFeedback>{userFormErrors.above18}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="type">Select User Type</Label>
          <Input
            id="type"
            multiple
            name="type"
            type="select"
            onChange={changeHandler}
            invalid={userFormErrors.type}
          >
            <option>Customer</option>
            <option>Shop</option>
            <option>Admin</option>
          </Input>
          <FormFeedback>{userFormErrors.type}</FormFeedback>
        </FormGroup>

        <Button type="button" onClick={resetForm} className="me-2">
          Reset Form
        </Button>
        <Button type="submit" color="primary" disabled={disableButton}>
          Create User
        </Button>
      </Form>
    </div>
  );
};

export default CreateUserForm;
