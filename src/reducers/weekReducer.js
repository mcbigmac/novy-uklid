import cinnosti from "../cinnostiTyden";

const reducer = (state = cinnosti, action) => {
  switch (action.type) {
    case "GET_STATE":
      return state;
    case "DELETE":
      return state.filter((todo) => todo.name !== action.payload);
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.name === action.payload) {
          todo.completed = true;
        }
        return todo;
      });
    case "ASSIGN":
      return state.map((todo) => {
        if (todo.name === action.payload.taskName) {
          todo.who = action.payload.who;
        }
        return todo;
      });
    default:
      return state;
  }
};

export default reducer;
