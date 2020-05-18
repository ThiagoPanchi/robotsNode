const readline = require('readline-sync');
const google = require('googleapis').google;
const customSearch = google.customsearch('v1');
const googleSearchCredentials = require('../credentials/google-search.json');


async function start(){

  const content = {};

  content.searchTerm = askAndReturnSearchTerm();
  //content.searchTermPrefix = askAndReturnPrefix();
  content.googleCustomSearchResults = await googleCustomSearchResults(content);
  console.log(content);

  function askAndReturnSearchTerm() {
    return readline.question('Type a wikipedia search term: ');
    
  }
  function askAndReturnPrefix(){
    const prefixes = ['Who is', 'What is', 'The History of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose onde option: ')
    const selectedPrefixText = prefixes[selectedPrefixIndex]
    return selectedPrefixText;

  }
  async function googleCustomSearchResults(content){
    const response = await customSearch.cse.list({
      auth: googleSearchCredentials.apiKey,
      cx: googleSearchCredentials.searchEngineId,
      q: content.searchTerm,
      num: 2
    });
    const responseTest = response.data.items.map((item) => {
      return item.snippet.slice();
    })
    return responseTest;
  }

}

start();

