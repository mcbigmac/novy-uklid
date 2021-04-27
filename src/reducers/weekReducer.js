export const getWeek = () => (dispatch) => {
  fetch(`http://localhost:3001/tyden`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: "GET_WEEK", payload: data });
    })
    .catch((error) => console.log(error));
};

export const getCurrentWeek = () => (dispatch) => {
  fetch(`http://localhost:3001/aktualni`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: "GET_WEEK", payload: data });
    })
    .catch((error) => console.log(error));
};

export const saveWeekOrSeason = () => (dispatch, getState) => {
  fetch(`http://localhost:3001/aktualni`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getState().week),
  })
    .then((response) => response.json)
    .catch((error) => console.log(error));

  fetch(`http://localhost:3001/pololetiAktualni`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getState().season),
  })
    .then((response) => response.json)
    .catch((error) => console.log(error));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_WEEK":
      return action.payload;
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
