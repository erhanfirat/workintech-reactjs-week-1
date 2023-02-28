import { getFullName } from "../utils/utils";

const Greeting = (props) => {
  return <div>Merhaba {getFullName(props.user)}</div>;
};

export default Greeting;
