import { useForm } from "react-hook-form";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const LoginWithRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", password: "", keepMeSignedIn: true },
  });

  const doLoginUSer = (loginFormData) => {
    console.log("loginFormData > ", loginFormData);
  };

  return (
    <div className="login-form p-3 border border-primary-subtle rounded shadow ">
      <h2 className="text-primary">Login Form</h2>
      <form onSubmit={handleSubmit(doLoginUSer)}>
        <label htmlFor="user-name">Name</label>
        <input
          type="name"
          name="name"
          id="user-name"
          {...register("name", { required: "İsim alanı zorunludur!" })}
        />
        {errors.name && (
          <div className="form-error text-danger"> * {errors.name.message}</div>
        )}
        <br />
        <label htmlFor="user-mail">Email</label>
        <input
          type="email"
          name="email"
          id="user-mail"
          placeholder="abc@abc.com"
          {...register("email")}
        />
        <br />
        <label htmlFor="user-pass">Password</label>
        <input
          type="password"
          name="password"
          id="user-pass"
          {...register("password")}
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="keepMeSignedIn"
            id="user-keepme"
            {...register("keepMeSignedIn")}
          />
          Keep me signed in
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginWithRHF;
