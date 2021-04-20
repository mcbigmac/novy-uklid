const reducer = (state = { week: true }, action) => {
  switch (action.type) {
    case "SWITCH":
      return { ...state, week: !state.week };
    default:
      return state;
  }
};

export default reducer;
