import store from "./store";

let currentAuth;

// create listener
function listener() {
  let previousAuth = currentAuth;

  // update currentAuth value from newest state
  currentAuth = store.getState().auth;

  // check if state value has changed
  if (currentAuth !== previousAuth) {
    // if changed save to localStorage
    localStorage.setItem("auth", JSON.stringify(currentAuth));
  }
}

// create listen function
function listen() {
  store.subscribe(listener);
}

export { listen };
