function Palindrome(str) {
  let convert = str.toLowerCase();
  let reverse = convert.split("").reverse().join("");

  return convert === reverse;
}

console.log(Palindrome("dood"));
