import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import useLocalStorage from "../hooks/useLocalStorage";

const Greeting = (props) => {
  const [userName, setUserName] = useLocalStorage("user-name", "");
  // const [userNameInput, setUserNameInput] = useState("");
  const [userNameInput, usernameChangeHandler] = useInput("");
  const [emailInput, emailChangeHandler] = useInput("");

  useEffect(() => {
    // axios.post("https://mockworker.com/login", { user: "asd", pass: "asd" });
  }, []);

  const userNameSubmit = (e) => {
    e.preventDefault();
    setUserName(userNameInput);
  };

  return (
    <div>
      {userName && <h3>Merhaba {userName}</h3>}
      {!userName && (
        <form onSubmit={userNameSubmit}>
          <label htmlFor="input-user-name">
            Lütfen size hitap etmek istediğim ismi giriniz...
          </label>
          <input
            id="input-user-name"
            type="text"
            placeholder="İsminiz"
            value={userNameInput}
            onChange={usernameChangeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Greeting;
