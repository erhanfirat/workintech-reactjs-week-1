import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import useLocalStorage from "../hooks/useLocalStorage";
import { updateTitleAction } from "../store/actions/actions";

const Greeting = (props) => {
  const [userName, setUserName] = useLocalStorage("user-name", "");
  // const [userNameInput, setUserNameInput] = useState("");
  const [userNameInput, usernameChangeHandler] = useInput("");
  const title = useSelector((store) => store.titleState.title);
  const dispatch = useDispatch();

  useEffect(() => {
    // axios.post("https://mockworker.com/login", { user: "asd", pass: "asd" });
  }, []);

  const userNameSubmit = (e) => {
    e.preventDefault();
    setUserName(userNameInput);
    dispatch(updateTitleAction(`Merhaba ${userNameInput}!`));
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
      <hr />
      <h4>Data from redux store: {title}</h4>
    </div>
  );
};

export default Greeting;
