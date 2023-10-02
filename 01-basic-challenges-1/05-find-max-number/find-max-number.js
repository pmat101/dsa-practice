function findMaxNumber(args) {
  let max = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] > max) max = args[i];
  }
  return max;
}

module.exports = findMaxNumber;
