const theme = {
  mama: {
    name: "Máma",
    color: "hotpink",
    background: "pink",
    completed: "rgba(202, 67, 179, 0.19)",
  },
  tata: {
    name: "Táta",
    color: "blue",
    background: "lightblue",
    completed: "rgba(67, 167, 202, 0.19)",
  },
  kuba: {
    name: "Kuba",
    color: "green",
    background: "lightgreen",
    completed: "rgba(91, 202, 67, 0.19)",
  },
  matej: {
    name: "Matěj",
    color: "chocolate",
    background: "burlywood",
    completed: "rgba(202, 181, 67, 0.19)",
  },
  nikdo: {
    name: "zatím nikdo",
    color: "black",
    background: "white",
    completed: "white",
  },
};

const reducer = (state = theme, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
