let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;

let passengerId = 0;

let tripId = 0;

class Driver {
    constructor(name) {
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
    }

    passengers () {
        return this.trips().map(trip => trip.passenger());
    }

    trips () {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        )
    }

};

class Passenger {
    constructor(name){
        this.name = name
        this.id = ++passengerId

        store.passengers.push(this)
    };

    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        );
        
    }

    drivers() {
        return this.trips().map(trip => trip.driver());
        // iterate through this passengers trips and return an array of the drivers for each trip
        // passengers() {
        //     return store.passengers.find(passenger => {
        //       return passenger.id === this.passengerId;
        //     });
        // }
    };
}

class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId
        if (driver) {
            this.driverId = driver.id
        }
        if (passenger) {
            this.passengerId = passenger.id
        }
        store.trips.push(this)
    };

    passenger() {
        return store.passengers.find( passenger => {
                return passenger.id === this.passengerId
            }
        );

    };

    driver() {
        return store.drivers.find(
            function (driver) {
                return driver.id === this.driverId;
            }.bind(this)
        );
    };
}
