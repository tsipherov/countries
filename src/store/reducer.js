export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "":
      return { ...state };

    default:
      return state;
  }
};
