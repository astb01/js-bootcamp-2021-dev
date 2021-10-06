// Pascal case:
export default class Car {
  constructor(engineSize, make, manufacturer) {
    this._engineSize = engineSize;
    this._make = make;
    this._manufacturer = manufacturer;
  }

  setEngineSize(engineSize) {
    this._engineSize = engineSize;
  }

  getEngineSize() {
    return this._engineSize;
  }
}

// {
//     engineSize: 1.2,
//     make: 'Fiesta',
//     manufacturer: 'Ford'
// }
