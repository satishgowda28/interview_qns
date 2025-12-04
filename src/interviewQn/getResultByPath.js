function getResultByPath(path, obj) {
  //write your implementation here
  const arrOfPath = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  /* const value = arrOfPath.reduce((prev, path) => {
    return prev[path] ? prev[path] : {}; 
  }, obj);

  return Object.keys(value).length === 0 ? undefined : value; */
  let result = obj;
  for (let key of arrOfPath) {
    if (result === undefined || result === null) {
      break;
    }
    result = result[key];
  }
  return result;
}

const x = {
  data: {
    results: [
      {
        status: "completed",
        error: "",
      },
      {
        status: [{ type: "done" }, { type: "start" }],
        error: "",
      },
    ],
  },
};
getResultByPath("data.results[1].status[0].type", x);
getResultByPath("user.address.city", {
  user: {
    profile: {
      name: "Alice",
    },
  },
});
