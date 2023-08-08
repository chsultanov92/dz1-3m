function factorialRecursive(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorialRecursive(n - 1);
  }
  
  const number = 5;
  const factorial = factorialRecursive(number);
  console.log(`Факториал ${number} равен ${factorial}`);


  const text = "My name 457 is Alex";
  const nonDigitCharacters = text.replace(/\d+/g, "");
  console.log(nonDigitCharacters);



  const text1 = "Hello\tWorld\nTest";
  const whitespaceCharacters = text1.match(/\s/g);
  console.log(whitespaceCharacters);

  function countChar(str, char){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  


  const text2 = 'loremipsumdolor';
  const character = 'o';
  const result = countChar(text2, character);
  console.log(`Символ '${character}' встречается ${result} раза в тексте.`);
  