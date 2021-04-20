const theme = {
  mama: { name: "Máma", color: "hotpink", background: "pink" },
  tata: { name: "Táta", color: "blue", background: "lightblue" },
  kuba: { name: "Kuba", color: "green", background: "lightgreen" },
  matej: { name: "Matěj", color: "chocolate", background: "burlywood" },
};

const reducer = (state = theme, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
