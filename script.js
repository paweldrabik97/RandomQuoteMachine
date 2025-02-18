let currentQuote = '';
let currentAuthor = '';
let quotesData = [];

$(document).ready(function() {
   getQuotes().then(() => {
     getQuote()
   }); 
  $( "#new-quote" ).on( "click", function() {
  getQuote();
} );
  
});

const getQuotes = () => {
  return $.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',  function(jsonQuotes) {
    
        
      quotesData = jsonQuotes.quotes;
        //console.log('quotesData');
        //console.log(quotesData[1].quote);
    
      
  })
}

const getRandomQuote = () => {
  let index = Math.floor(Math.random() * quotesData.length);
  console.log(quotesData[1]);
  
  
  return quotesData[index];
}

const getQuote = () => {
  const randomQuote = getRandomQuote();
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;
  
  $("#text").html(currentQuote);
  $("#author").html(currentAuthor);
}