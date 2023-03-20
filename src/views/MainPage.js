import PageTemplate from "./PageTemplate";
import LoginWithRHF from "../components/LoginWithRHF";

const MainPage = () => {
  return (
    <PageTemplate title="Ana Sayfa">
      React web auygulamama hoşgeldiniz.
      <LoginWithRHF />
    </PageTemplate>
  );
};

export default MainPage;
