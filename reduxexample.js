const redux = require("redux");

const init = {
  counter: 1000
};

//Reducer
const reducer = (state = init, action) => {
  switch (action.type) {
    case "ADD":
      return { counter: state.counter + 1 };
    case "SUB":
      return { counter: state.counter - 1 };
    case "ADD_N":
      return { counter: state.counter + action.num };
  }
  return state;
};

//Store
const store = redux.createStore(reducer);

console.log(store.getState());

//Action
const addAction = {
  type: "ADD"
};

store.subscribe(() => {
    console.log('subscription',store.getState());
});
store.dispatch(addAction);
store.dispatch(addAction);
store.dispatch(addAction);
// console.log(store.getState());

store.dispatch({ type: "SUB" });
// console.log(store.getState());

store.dispatch({ type: "ADD_N", num: 100 });
// console.log(store.getState());
