const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.splice(kittens.length, 0, name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var newArray = kittens.slice()
  return [...newArray, name]
}
