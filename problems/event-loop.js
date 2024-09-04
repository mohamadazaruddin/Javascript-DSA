console.log("1");
setTimeout(() => {
  console.log("2");
}, 6000);
new Promise((resolve, reject) => {
    console.log("3");
});  
console.log("4");
