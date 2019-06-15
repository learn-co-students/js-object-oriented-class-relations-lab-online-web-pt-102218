let store = { trips: [], drivers: [] }
class Driver {
  constructor(name) {
    this.name = name;
  }
  trips () {
    return store.trips.filter (
      function(item) {
        return item.userId === this.userId
      }
    ).bind(this)
  }
}