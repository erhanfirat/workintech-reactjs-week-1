import { useState } from "react";
import { toast } from "react-toastify";
import { axiosApi } from "../api/api";

// enum
export const REQ_TYPES = Object.freeze({
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
});

// axios.put(endpoint, payload, config)
// axios["put"](endpoint, payload, config)
// axios[REQ_TYPES.PUT](endpoint, payload, config)

const useAxios = (initialValue = null) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState();

  const doRequest = ({
    endpoint,
    reqType = REQ_TYPES.GET,
    payload,
    config,
  }) => {
    /**
     * axios.get(endpoint, config?)
     * axios.post(endpoint, payload, config?)
     * axios.put(endpoint, payload, config?)
     * axios.delete(endpoint, config?)
     */

    setLoading(true);
    return axiosApi[reqType](endpoint, payload, config)
      .then((res) => {
        setData(res.data);
        setError(null);
        return res.data;
      })
      .catch((err) => {
        setError(err);
        setData(initialValue);
        toast.error(err.message);
        console.error(err);
        // alınan hatayı loglayıp kaydedebiliriz
        throw err;
      })
      .finally(() => setLoading(false));
  };

  return [doRequest, data, loading, error];
};

export default useAxios;
