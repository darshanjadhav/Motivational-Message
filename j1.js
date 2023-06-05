function gm(){
    event.preventDefault();

    let msg = document.getElementById("msg");
    let url = "https://api.quotable.io/random";

    let author;
    let quote;

    fetch(url)
    .then(res => res.json())
    .then(data => msg.innerHTML = data.author + " ==> " + data.content )
    .catch(err =>msg.innerHTML = err);

    



}