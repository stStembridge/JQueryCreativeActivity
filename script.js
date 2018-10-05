var app = document.getElementById('box');

var container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

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
            card.setAttribute('class', 'card');

            const img = document.createElement('img');
            img.src = articles.urlToImage;
            img.alt = "image not found";

            const a = document.createElement('a');
            a.textContent = articles.title;
            a.href = articles.url;

            const p = document.createElement('p');
            p.textContent = articles.description;
            
            const s = document.createElement('p');
            s.setAttribute('class','source');
            s.textContent = articles.source.name.toUpperCase();

            if (articles.urlToImage && articles.description) {
                container.appendChild(card);
                card.appendChild(img);
                card.appendChild(a);
                card.appendChild(p);
                card.appendChild(s);
            }
        })
    })
