// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowel_count(str1) {
  //write your code here
  // let toArray = str1.split(" ");
  let counter = 0;
  // console.log(toArray);
  let vovels = "aeiouAEIOU";

  for (let i = 0; i < str1.length; i++) {
    if (vovels.indexOf(str1[i]) !== -1) {
      counter += 1;
      // console.log(str1[i]);
    }
  }
  return counter;
}
// console.log(vowel_count("The quick brown fox"));

//2
// Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l) {
  //write your code here
  let sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let newStr = "";

  for (let i = 0; i < l; i++) {
    newStr += sample.charAt(Math.ceil(Math.random() * sample.length));
    // console.log(newStr);
  }
  // console.log(Math.ceil(Math.random() * sample.length));
  return newStr;

  // console.log(newStr);
}

// makeid(8);
console.log(makeid(5));

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function abc() {
  //write your code here
}

abc();
