const letterPositions = (sentence) => {
  
  const results = {};
  for (let char in sentence) {
    if (!results[sentence[char]]) {
      results[sentence[char]] = [char];
    } else {
      results[sentence[char]].push(char);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));