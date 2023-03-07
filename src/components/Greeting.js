import { assertExpressionStatement } from "@babel/types";
import { getFullName } from "../utils/utils";

const Greeting = (props) => {
  // useEffect(() => {
  //   axios.post("https://mockworker.com/login", { user: "asd", pass: "asd" });
  // }, []);

  return <div>Merhaba {getFullName(props.user)}</div>;
};

export default Greeting;
