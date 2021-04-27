const reducer = (state = { week: true, necoSeUdelalo: false }, action) => {
  switch (action.type) {
    case "SWITCH":
      return { ...state, week: action.payload };
    case "DONE":
      return { ...state, necoSeUdelalo: action.payload };
    default:
      return state;
  }
};

export default reducer;
