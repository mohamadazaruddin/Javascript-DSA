let array = [20, 36, 12, 85, 41, 99, 142, 155];
// console.log(Math.max(...array));

let max = 0; // for smallest num change this to max = array[0] and if condition to  array[index] < max
for (let index = 0; index < array.length; index++) {
  if (array[index] > max) {
    max = array[index];
  }
}
console.log(max, "mx");
let obj = [
  {
    id: 1,
    name: "taskname",
    desc: "new Task",
    status: "pending",
  },
  {
    id: 2,
    name: "taskname",
    desc: "new Task",
    status: "pending",
  },
  ,
];
