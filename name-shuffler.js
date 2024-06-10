// name-shuffler.js

function randomSyllable() {
  // Generate a random consonant or vowel sound
  return Math.random() < 0.6 ? consonant() : vowel();
}

function consonant() {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  return consonants[Math.floor(Math.random() * consonants.length)];
}

function vowel() {
  const vowels = "aeiou";
  return vowels[Math.floor(Math.random() * vowels.length)];
}

function generateRandomWord(numSyllables) {
  let word = "";
  for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) { // 1-3 syllables
    word += randomSyllable();
  }
  return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize first letter
}

function generateRandomName(options = {}) {
  const { numWords = 2, nameList, prefix, suffix } = options;

  if (nameList) {
    // Choose a random name from the provided list
    return nameList[Math.floor(Math.random() * nameList.length)];
  } else {
    // Generate random words based on numWords
    let name = "";
    for (let i = 0; i < numWords; i++) {
      name += generateRandomWord(Math.floor(Math.random() * 3) + 1) + " ";
    }
    name = name.trim();

    if (prefix) {
      name = prefix + " " + name;
    }
    if (suffix && name.length > prefix?.length) { // Add suffix only if space available
      name += " " + suffix;
    }
    return name;
  }
}

module.exports = {
  generateRandomName,
};

