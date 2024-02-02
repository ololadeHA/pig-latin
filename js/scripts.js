// UI Logic

$(document).ready(function () {
  $("form#formWord").submit(function (event) {
      event.preventDefault();

      const passage = $("#sentence").val();

      let result = pigLatin(passage);
      $("#result").text(result);


  });
});


 
// Business Logic
function pigLatin(passage) {
  if (passage.trim().length === 0) {
      return '';
  }

  let vowels = "aeiou";
  let returnString = "";
  const wordArray = passage.split(" ");
  console.log(wordArray);

  for (let i = 0; i < wordArray.length; i++) {
      let currentWord = wordArray[i];
      if (wordArray[i] !== "") {
          if (vowels.includes(currentWord.charAt(0).toLowerCase())) {
              wordArray[i] = currentWord.concat("way");
          } else {
              wordArray[i] = modifiedConsonant(currentWord);
          }
      }
  }
  returnString = wordArray.join(" ");
  return returnString.trim();
}

function modifiedConsonant(word) {
  let vowels = "aeiou";
  let characterWords = word.split("");
  let returnString = "";

  for (let i = 0; i < characterWords.length; i++) {
      if ("q" === characterWords[i].charAt(0).toLowerCase()) {
          returnString = word.slice(2).concat(characterWords[i] + characterWords[i + 1] + "ay");
          return returnString;
      } else if (vowels.includes(characterWords[i].toLowerCase())) {
          returnString = word.slice(i).concat(word.slice(0, i) + "ay");
          return returnString;
      }
  }

  return word;
}// UI Logic

$(document).ready(function () {
  $("form#word-merch").submit(function (event) {
      event.preventDefault();

      const passage = $("#text-passage").val();

      let result = pigLatin(passage);
      $("#result").text(result);


  });
});



// Business Logic
function pigLatin(passage) {
  if (passage.trim().length === 0) {
      return '';
  }

  let vowels = "aeiou";
  let returnString = "";
  const wordArray = passage.split(" ");
  console.log(wordArray);

  for (let i = 0; i < wordArray.length; i++) {
      let currentWord = wordArray[i];
      if (wordArray[i] !== "") {
          if (vowels.includes(currentWord.charAt(0).toLowerCase())) {
              wordArray[i] = currentWord.concat("way");
          } else {
              wordArray[i] = modifiedConsonant(currentWord);
          }
      }
  }
  returnString = wordArray.join(" ");
  return returnString.trim();
}

// function modifiedConsonant(word) {
//   let vowels = "aeiou";
//   let characterWords = word.split("");
//   let returnString = "";

//   for (let i = 0; i < characterWords.length; i++) {
//       if ("q" === characterWords[i].charAt(0).toLowerCase()) {
//           returnString = word.slice(2).concat(characterWords[i] + characterWords[i + 1] + "ay");
//           return returnString;
//       } else if (vowels.includes(characterWords[i].toLowerCase())) {
//           returnString = word.slice(i).concat(word.slice(0, i) + "ay");
//           return returnString;
//       }
//   }

//   return word;
// }