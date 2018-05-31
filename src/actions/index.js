export function fetchCars() {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/garage-douceur/cars`)
    .then(response => response.json());

  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}

export function createCar(car, callback) {
  const request = fetch(`https://wagon-garage-api.herokuapp.com/garage-douceur/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  }).then(response => response.json())
    .then(() => callback());

  return {
    type: 'CAR_CREATED',
    payload: request
  };
}

export function fetchCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());
  return {
    type: 'FETCH_CAR',
    payload: promise
  };
}

export function deleteCar(history, car) {
  fetch(`https://wagon-garage-api.herokuapp.com/cars/${car.id}`, {
    method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(""));

  return {
    type: 'DELETE_CAR',
    payload: car
  };
}

