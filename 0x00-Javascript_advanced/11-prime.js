function countPrimeNumbers() {
  let count = 0;
  for(let i = 2; i < 101; i++) {
    if(i == 2) {
      count++;
      continue;
    }
    else if(i == 3) {
      count++;
      continue;
    }
    else if(i == 5) {
      count++;
      continue;
    }
    else if(i == 7) {
      count++;
      continue;
    }
    else if(Number.isInteger(i / 2) || Number.isInteger(i / 3) || Number.isInteger(i / 5) || Number.isInteger(i / 7)) {
      continue;
    }
    else {
      count++;
    }
  }
  return count;
}

const t0 = performance.now();

setTimeout(() => {
  for(let i = 1; i < 101; i++) {
    console.log(countPrimeNumbers());
  }
  const t1 = performance.now();
  console.log(`Execution time of countPrimeNumbers was ${t1 - t0} milliseconds.`);
}, 0);
