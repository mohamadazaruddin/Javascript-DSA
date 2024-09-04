function Angaram(str1, str2) {
  if (str1.length != str2.length) return false;
  let s1 = str1.split("").sort();
  let s2 = str2.split("").sort();
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] != s2[i]) return false;
  }
  return true;
}
console.log(Angaram("red", "der"));
