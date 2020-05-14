const readline = require('readline-sync');
const state = require('./state');

function robot(){
  const content = {
    maximumSentences: 7
  }

  content.searchTerm = askAndReturnSearchTerm();
  content.prefix = askAndReturnPrefix();
  state.save(content);

  function askAndReturnSearchTerm() {
    return readline.question('Type a wikipedia search term: ')
  }
  function askAndReturnPrefix(){
    const prefixes = ['Who is', 'What is', 'The History of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose onde option: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]
    return selectedPrefixText;

  }
}

module.exports = robot