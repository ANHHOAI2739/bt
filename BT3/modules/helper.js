let a = [1, 5, 3, 8, 10];

export const avg = (a) => {
  let sum = 0;
  a.map((value, i) => {
    sum += value;
  });
  return sum / a.length;
};

export const sorted = a.sort((a, b) => b - a);

export const sumPositiveInt = () => {
  let positiveInt = a.filter((value) => value > 0);
  let sum = 0;
  positiveInt.map(function (value) {
    sum += value;
  });
  return sum;
};

export const sumOddNumber = (a) => {
  let oddNumber = a.filter((value) => value % 2 === 1);
  let sum = 0;
  oddNumber.map(function (value) {
    sum += value;
  });
  return sum;
};

export const secondHighest = (a) => {
  let newA = a.filter((value, index) => a.indexOf(value) === index);
  let sortedA = newA.sort((a, b) => a - b);
  let result = sortedA[sortedA.length - 2];
  return result;
};

export const square = (a) => {
  return a.map(function (x) {
    return Math.pow(x, 2);
  });
};
