var app = document.getElementById("box");

var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=794f0bc98a2a4b5a86290d23ab18ed27';
var req = new Request(url);
fetch(req)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.articles.forEach(articles => {
            const card = document.createElement('div');
            card.setAttribute('class','card');
            
            const a = document.createElement('a');
            a.textContent = articles.title;
            a.href = articles.url;
            
            app.appendChild(card);
            app.appendChild(a);
        })
    })