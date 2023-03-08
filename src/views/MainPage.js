import CreateUserForm from "../components/CreateUserForm";
import PageTemplate from "./PageTemplate";

const MainPage = () => {
  return (
    <PageTemplate title="Ana Sayfa">
      React web auygulamama hoşgeldiniz.
      <CreateUserForm />
    </PageTemplate>
  );
};

export default MainPage;
