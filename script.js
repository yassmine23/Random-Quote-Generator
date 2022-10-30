const quoteText = document.querySelector(".quote"),
authorName=document.querySelector(".author span"),
  quoteBtn = document.querySelector("button"),
  soundBtn= document.querySelector(".sound"),
  copyBtn= document.querySelector(".copy"),
  twitterBtn= document.querySelector(".twitter");


//random quote function
function randomQuote() {

  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerText = result.content;
      authorName.innerText= result.author;

    });
}
quoteBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener('click',()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener('click', ()=>{
    navigator.clipboard.writeText(quoteText.innerText)
});

twitterBtn.addEventListener('click', ()=>{
    let tweetURL =`https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetURL, '_blank');
});