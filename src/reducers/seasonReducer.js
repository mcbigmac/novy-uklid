var uklidServer = process.env.REACT_APP_UKLID_SERVER
if (!uklidServer) {
  uklidServer = 'http://localhost:3001'
}
console.log(uklidServer);

export const getSeason = () => (dispatch) => {
  fetch(`${uklidServer}/pololeti`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: "GET_SEASON", payload: data });
    })
    .catch((error) => console.log(error));
};

export const getCurrentSeason = () => (dispatch) => {
  fetch(`${uklidServer}/pololetiAktualni`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: "GET_SEASON", payload: data });
    })
    .catch((error) => console.log(error));
};

export const saveSeason = () => (dispatch, getState) => {
  fetch(`${uklidServer}/pololetiAktualni`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(getState().season),
  })
    .then((response) => response.json)
    .catch((error) => console.log(error));
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_SEASON": {
      console.log("fetching");
      return action.payload;
    }
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
