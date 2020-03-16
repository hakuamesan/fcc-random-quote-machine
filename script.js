function getQuote(){
  document.getElementById('new-quote').click();
}

document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('new-quote').onclick= () => {
      // Add your code below this line
fetch('https://raw.githubusercontent.com/hakuamesan/fcc-random-quote-machine/master/quotes.json')
    .then(response => response.json())
    .then(data => {
  //let d = JSON.parse(data);
  //let maxlen = data.quotes.length;
  
  let random = Math.floor(Math.random() * data.quotes.length);
  
  console.log(data.quotes[random].quote);
  console.log(data.quotes[random].author);
       
  document.getElementById('text').innerHTML = data.quotes[random].quote;
  document.getElementById('author').innerHTML = data.quotes[random].author;
  
    document.getElementById('tweet-quote').href = "https://twitter.com/intent/tweet/?text=" + encodeURIComponent(data.quotes[random].quote);

  
    })
    .catch(e => {
  document.getElementById('text').innerHTML = "If anything can go wrong, it will";
  document.getElementById('author').innerHTML = "Groucho Marx"
})

      
      // Add your code above this line
    };
  });
