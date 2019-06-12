let store = { drivers: [], passengers: [], trips: []}

let driverId = 0;
 
class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;
        
        // insert in the driver to the store
        store.drivers.push(this);
    }

    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
    }

    passengers() {
        return this.trips().map(trip => {
          return trip.passenger();
        });
      }
}

let passengerId = 0

class Passenger {
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;
 
        // insert in the passenger to the store
        store.passengers.push(this);
    }

    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        );
    }

    drivers() {
        return this.trips().map(trip => {
          return trip.driver();
        });
      }
}

let tripId = 0 

class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId;
        if (driver) {
            this.driverId = driver.id;
        }
        if (passenger) {
            this.passengerId = passenger.id;
        }
        // insert in the driver to the store
        store.trips.push(this);
    }

    setDriver(driver) {
        this.driverId = driver.id;
    }
    driver() {
        return store.drivers.find(
            function(driver) {
                return driver.id === this.driverId;
            }.bind(this)
        );
    }

    setPassenger(passenger) {
        this.passengerId = passenger.id;
    }
    passenger() {
        return store.passengers.find(
            function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        );
    }
}