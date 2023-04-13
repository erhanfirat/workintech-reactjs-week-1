import { useForm } from "react-hook-form";
import useAxios, { REQ_TYPES } from "../hooks/useAxios";
import { useEffect } from "react";
import { axiosApi } from "../api/api";
import { useNavigate } from "react-router";

const LoginWithRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { username: "", password: "", keepMeSignedIn: true },
  });

  const navigate = useNavigate();

  const [loginUser, resData, loading, resErr] = useAxios();

  const doLoginUSer = (loginFormData) => {
    console.log("loginFormData > ", loginFormData);
    loginUser({
      endpoint: "login",
      reqType: REQ_TYPES.POST,
      payload: loginFormData,
    }).then(resDt => {
      // res
    });
  };

  useEffect(() => {
    console.log("login resData > ", resData);
    if (resData?.token) {
      localStorage.setItem("token", resData.token);
      axiosApi.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${resData.token}`;
      // axiosApi.get("products").then((res) => console.log(res));
      console.log(axiosApi);
      navigate("/");
    }
  }, [resData]);

  return (
    <div className="login-form p-3 border border-primary-subtle rounded shadow ">
      <h2 className="text-primary">Login Form</h2>
      <form onSubmit={handleSubmit(doLoginUSer)}>
        <label htmlFor="user-mail">Email</label>
        <input
          type="email"
          id="user-mail"
          placeholder="abc@abc.com"
          {...register("username", {
            required: { value: true, message: "Zorunlu!" },
          })}
        />
        {errors.username && <p className="text-danger">Bu alan zorunludur!</p>}
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
        <button type="submit" disabled={!isValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginWithRHF;
