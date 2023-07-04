function add(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sum = x + y;
      console.log(`Adding ${x} + ${y} = ${sum}`);
      resolve(sum);
    }, 1000);
  });
}

function subtract(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const diff = x - y;
      console.log(`Subtracting ${x} - ${y} = ${diff}`);
      resolve(diff);
    }, 1500);
  });
}

function multiply(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = x * y;
      console.log(`Multiplying ${x} * ${y} = ${product}`);
      resolve(product);
    }, 2000);
  });
}

function divide(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const quotient = x / y;
      console.log(`Dividing ${x} / ${y} = ${quotient}`);
      resolve(quotient);
    }, 2500);
  });
}

async function performOperations(x, y) {
  const sum = await add(x, y);
  const diff = await subtract(sum, y);
  const product = await multiply(diff, y);
  const quotient = await divide(product, y);
  return quotient;
}

performOperations(10, 2).then((result) => {
  console.log(`Result: ${result}`);
});
