function longComputation() {
  let sum = 0;
  for (var i = 0; i < 100000e9; i++) {
    sum += i;
  }
}
process.on("message", (msg) => {
  const sum = longComputation();
  process.send(sum);
});
