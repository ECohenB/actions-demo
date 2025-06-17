function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
module.exports = sum;