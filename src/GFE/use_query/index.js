import { useEffect, useState } from "react";

function useQuery(func, deps) {
  const [currState, setCurrState] = useState({
    status: "loading",
  });

  useEffect(() => {
    setCurrState(() => ({ status: "loading" }));
    Promise.resolve(func()).then(
      (response) => {
        setCurrState(() => ({ status: "success", data: response }));
      },
      (err) => {
        setCurrState({ status: "error", error: { message: err } });
      },
    );
  }, [deps]);

  return currState;
}
