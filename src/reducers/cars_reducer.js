const carsReducer = (state = null, action) => {
  if (state === undefined) {
  // Reducer initialisation
    return [];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'FETCH_CARS': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default carsReducer;