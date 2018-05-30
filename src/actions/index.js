export function fetchCars() {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/garage-douceur/cars`)
    .then(response => response.json());

  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}
