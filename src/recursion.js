let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

console.log(
  sumSalaries(company), // 7700
);

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

function sumTo(n) {
  let sum = 0;

  //   for (let i = 0; i <= n; i++) {
  //     sum += i;
  //   }

  if (n == 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }

  return sum;
}

console.log(sumTo(100));
// 5050

// n! = n * (n - 1) * (n - 2) * ...*1
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n) {
  let sum = 0;
  for (let i = n; i <= n; i--) {
      
    //   let w = i * (n - 1);

      console.log(i);
      

    //   console.log(`${i} * ${n - 1} = ${w}`);

    // sum += w;
  }

  return sum;
}

console.log(factorial(5));

// alert( factorial(5) ); // 120
