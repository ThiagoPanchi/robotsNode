const readline = require('readline-sync');
const robots = {
  //userInput: require('./robots/user-input.js'),
  text: require('./robots/text')
}
async function start() {
  const content = {}


  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();

  //robots.userInput(content);
  await robots.text(content);
  
  function askAndReturnSearchTerm() {
    return readline.question('Type a wikipedia search term: ')
  }
  function askAndReturnPrefix(){
    const prefixes = ['Who is', 'What is', 'The History of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose onde option: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]
    return selectedPrefixText;

  }
  console.log(content)
}

start();