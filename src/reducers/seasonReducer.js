import cinnosti from "../cinnostiPololeti";

const reducer = (state = cinnosti, action) => {
  switch (action.type) {
    case "GET_STATE":
      return state;
    case "DO_TODAY":
      return state.map((todo) => {
        if (todo.name === action.payload) {
          todo.tyden = true;
          todo.doToday = true;
        }
        return todo;
      });
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.name === action.payload) {
          todo.completed = true;
        }
        return todo;
      });
    case "ASSIGN":
      return state.map((todo) => {
        if (todo.name === action.payload.name) {
          todo.who = action.payload.who;
        }
        return todo;
      });
    default:
      return state;
  }
};

export default reducer;
