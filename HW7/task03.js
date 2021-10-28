function ipsBetween(one, two) {
  if (one.split('.').length !== 4 || two.split('.').length !== 4) {
    return 'Incorrect data format';
  }

  const calculation = (data) => {
    return data
      .split('.') // [ '10', '0', '0', '0' ] // [ '10', '0', '0', '50' ]
      .reduce(
        // 0      10       0         0    +   10   * (256 ^ 3 - 0)
        (accVal, curVal, index) => accVal + curVal * Math.pow(256, 3 - index),
        0
      );
  };

  //        167772160 + 0 + 0 + 0  - 167772160 + 0 + 0 + 50*1 = - 50
  return Math.abs(calculation(one) - calculation(two));
}

// console.log(ipsBetween('10.0.0.0', '10.0.0.50')); // 50
// console.log(ipsBetween('10.0.0.0', '10.0.1.0')); // 256
// console.log(ipsBetween('20.0.0.10', '20.0.1.0')); //246
