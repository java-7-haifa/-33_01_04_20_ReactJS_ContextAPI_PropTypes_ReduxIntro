const init = {
  counter: 0
  
};

export default function counterReducer(state = init, action) {
  switch (action.type) {
    case "ADD":
      return { counter: state.counter + 1 };
    case "SUB":
      return { counter: state.counter - 1 };
    case "ADD_N":
      return { counter: state.counter + action.num };
    case "SUB_N":
      return { counter: state.counter - action.num };
  }
  return state;
}
