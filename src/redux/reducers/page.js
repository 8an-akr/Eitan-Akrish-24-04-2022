const pageReducer = (state, action) => {
  switch (action.type) {
    case "FAVORITES":
      return (state = "favorites");
    default:
      return (state = "weather");
  }
};

export default pageReducer;
