import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const useAxios = (initialValue, endpoint, reqType, param) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();

  const doRequest = () => {
    setLoading(true);
    axios[reqType](endpoint, param)
      .then((res) => {
        setData(res.data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setData(initialValue);
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

  return [doRequest, data, loading, error];
};

export default useAxios;
