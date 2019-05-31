let driverId = 0; 

let store = { drivers: [], passengers: [], trips: []}; 

class Driver {
  constructor(name) { 
    this.id = ++ driverId; 
    this.name = name; 

    store.drivers.push(this);
  }
}

let passengerId = 0; 

class Passenger {
  constructor(name) {
    this.id = ++ passengerId;
    this.name = name; 

    store.passengers.push(this);
  }
}

let tripId = 0; 

class Trip {
  constructor(driver, passenger) {
    this.id = ++ tripId;
    this.driverId = driver.id; 
    this.passengerId = passenger.id;

    store.trips.push(this);
  };
  passenger() {
    return store.passengers.filter(
        function(passenger) {
          return passenger.id === this.passengerId;
        }.bind(this)
    );
  }
}