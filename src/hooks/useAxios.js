import { useState } from "react";
import { toast } from "react-toastify";
import { axiosApi } from "../api/api";

const useAxios = (initialValue, endpoint, reqType) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();

  const doRequest = (reqData) => {
    setLoading(true);
    axiosApi[reqType](endpoint, reqData)
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
