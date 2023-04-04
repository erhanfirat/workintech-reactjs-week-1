import LoginWithRHF from "../components/LoginWithRHF";
import PageTemplate from "./PageTemplate";

const LoginPage = () => {
  return (
    <PageTemplate title="Login Page">
      Lütfen giriş yapınız...
      <LoginWithRHF />
    </PageTemplate>
  );
};

export default LoginPage;
