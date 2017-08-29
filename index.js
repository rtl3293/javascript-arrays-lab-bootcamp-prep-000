const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.splice(-1, 0, name)
  return kittens
}
