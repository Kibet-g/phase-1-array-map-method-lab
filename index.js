const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    // Split the tutorial title into words
    let words = tutorial.split(' ');

    // Capitalize the first letter of each word while preserving existing capitalization
    let capitalizedWords = words.map(word => {
      // If the word is fully uppercase (like "OO", "API"), leave it unchanged except for first letter
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the words back into a string
    return capitalizedWords.join(' ');
  });
};