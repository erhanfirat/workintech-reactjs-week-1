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
      <h3>
        Merhaba {userName}
        {!userName && (
          <form onSubmit={userNameSubmit} style={{ display: "inline" }}>
            <input
              id="input-user-name"
              type="text"
              placeholder="Size nasıl hitap etmemi istersiniz?"
              value={userNameInput}
              onChange={usernameChangeHandler}
            />
          </form>
        )}
      </h3>
    </div>
  );
};

export default Greeting;
