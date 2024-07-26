import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
handleResponseFromAPI(promise);

const promiseReject = Promise.reject();
handleResponseFromAPI(promiseReject);
