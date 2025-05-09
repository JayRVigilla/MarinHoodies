import { tObjectStringToString } from "../types";

export const BASE_REQUEST: RequestInit = {
  // *GET, POST, PUT, DELETE, etc.
  method: "GET",

  // no-cors, *cors, same-origin
  mode: "cors",

  // *default, no-cache, reload, force-cache, only-if-cached
  cache: "no-cache",

  // include, *same-origin, omit
  credentials: "same-origin",

  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    "Content-Type": "application/json",
  },

  // manual, *follow, error
  redirect: "follow",

  // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

  referrerPolicy: "no-referrer",
  // body data type must match "Content-Type" header
  // body: JSON.stringify(data),
};

// Some APIs don't handle empty values for queries
// takes form queryObject, returns URLSearchParams with truthy values only
export const validQueries = (queryObject: tObjectStringToString) => {
  const result = new URLSearchParams();
  for (const key in queryObject) {
    if (queryObject[key]) {
      result.append(key, queryObject[key]);
    }
  }
  return result;
};
