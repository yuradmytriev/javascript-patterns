class Fulltime {
  constructor () {
    this.rate = '$12'
  }
}

class PartTime {
  constructor () {
    this.rate = '$11'
  }
}

class Employee {
  create (type) {
    let employee
    if (type === 'fulltime') {
      employee = new FullTime()
    } else if (type === 'parttime') {
      employee = new PartTime()
    }
    employee.type = type
    employee.say = function () {
      console.log(`${this.type}: rate ${this.rate}/hour`)
    }
  }
}

const factory = new Employee()
fulltime = factory.create('fulltime')
parttime = factory.create('parttime')


fulltime.say()
parttime.say()