let store = {
  drivers: [],
  passengers: [],
  trips: []
}
let i = {
  driver: 0,
  passenger: 0,
  trip: 0
}

class Person {
  constructor(name) {
    this.name = name

  }
}

class Driver extends Person {
  constructor(name) {
    super(name)
    this.id = i.driver += 1

    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(
      function (trip) {
        return trip.driverId === this.id
      }.bind(this)
    )
  }
  passengers() {
    return store.trips.filter(
      function (trip) {
        return trip.driverId === this.id
      }.bind(this)).map(
      function (trip) {
        return trip.passenger()
      }
    )

  }

}

class Passenger extends Person {
  constructor(name) {
    super(name)

    this.id = i.passenger += 1
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(
      function (trip) {
        return trip.passengerId === this.id
      }.bind(this)
    )
  }
  drivers() {
    return store.trips.filter(
      function (trip) {
        return trip.passengerId === this.id
      }.bind(this)).map(
      function (trip) {
        return trip.driver()
      }
    )
  }
}

class Trip {
  constructor(driver, passenger) {


    this.driverId = driver.id
    this.passengerId = passenger.id

    this.id = i.trip += 1
    store.trips.push(this)
  }
  passenger() {
    return store.passengers.find(
      function (passenger) {
        return passenger.id === this.passengerId
      }.bind(this)
    )
  }
  driver() {
    return store.drivers.find(
      function (driver) {
        return driver.id === this.driverId
      }.bind(this)
    )
  }

}

x = new Driver('joe')
y = new Passenger('mary')
t = new Trip(x, y)

debugger
