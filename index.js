// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    return drivers.push(name);
}

function destructivelyPrependDriver(name) {
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    return drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    return drivers.shift();
}

function appendDriver(name) {
    return [...drivers, name]
}

function prependDriver(name) {
    return [name, ...drivers]
}

function removeLastDriver() {
    let driverGettinPopped = [...drivers]
    driverGettinPopped.pop()
    return driverGettinPopped;
}

function removeFirstDriver() {
    let driverGettinPopped = [...drivers]
    driverGettinPopped.shift()
    return driverGettinPopped;
}
    