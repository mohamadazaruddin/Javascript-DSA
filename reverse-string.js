let str = "reverseme";
let reversed = "";
for (let index = str.length - 1; index >= 0; index--) {
  reversed = reversed + str[index];
}
console.log(reversed);
