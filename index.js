let store = { trips: [], drivers: [], passengers: [] }
class Driver {
  constructor(name) {
    this.name = name;
    this.id = Driver.incrementId()
    store.drivers.push(this);
  }
  
  trips () {
    let _this = this
    return store.trips.filter(
      function(trip) {
        return trip.driverId === _this.id
      }
    )
  }

  passengers() {
    // let _this = this
    const pids = [
      ...new Set(
        this.trips().map(x => x.passengerId)
        )
    ]
    return store.passengers.filter (
      function(pass) {
        return pids.includes(pass.id)
      }
    )
  }

  static incrementId() {
    if (!this.latestId) this.latestId = 1
    else this.latestId++
    return this.latestId
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = Passenger.incrementId();
    store.passengers.push(this);
  }
  static incrementId() {
    if (!this.latestId) this.latestId = 1
    else this.latestId++
    return this.latestId
  }
  trips () {
    let _this = this
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === _this.id
      }
    )
  }

  drivers() {
    // let _this = this
    const pids = [
      ...new Set(
        this.trips().map(x => x.driverId)
        )
    ]
    return store.drivers.filter (
      function(driver) {
        return pids.includes(driver.id)
      }
    )
  }
}

class Trip {
  constructor(driver, passenger) {
    this.passengerId = passenger.id;
    this.driverId = driver.id;
    // console.log(driver.id, passenger.id);
    this.id = Trip.incrementId();
    store.trips.push(this);
  }
  driver() {
    return store.drivers.filter(x =>  x.id === this.driverId)[0]
  }
  passenger() {
    return store.passengers.filter(x =>  x.id === this.passengerId)[0]
  }
  static incrementId() {
    if (!this.latestId) this.latestId = 1
    else this.latestId++
    return this.latestId
  }
}