const arr = [1, 2, 3, 4, 5];
console.log("Raw: " + arr);

const forEachArr = arr.forEach((val) => {
  return val + 1;
});
console.log("For each: " + forEachArr);

const mapArr = arr.map((val) => val * 3);
console.log("Mapped Array: " + mapArr);

const filteredArr = arr.filter((val) => val <= 2);
console.log("Filtered Arr: " + filteredArr);

const found = arr.find((val) => val === 4);
console.log("Found " + found);

const index = arr.indexOf(2);
console.log("Index: " + index);

const obj = {
  name: "Vedant",
  age: 21,
};

console.log(obj.age);
