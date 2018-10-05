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
            img.style.height=200;
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
    
    
    
    
    
     $(document).ready(function() {
        //   var homeurl = "https://newsapi.org/v2/top-headlines?country=" +
        //         "us" +
        //         "&apiKey=794f0bc98a2a4b5a86290d23ab18ed27";

        //     $.ajax({
        //         url: homeurl,
        //         dataType: "json",
        //         success: function(response_json) {
        //             var everything = "<h2>Today's Headlines</h2><br>";
        //             console.log(response_json);
        //             var articles = response_json['articles'];

        //             console.log(articles);
        //             $.each(articles, function(i, item) {
        //                 var image = articles[i]['urlToImage'];
        //                 if (image == null) {
        //                     image = "https://lh4.googleusercontent.com/-WU6FLD6jhPo/TWlDdpVYrVI/AAAAAAAAABQ/mYhf_eelq-E/s1600/planeta-terra-02-64172.jpg";
        //                 }
        //                 var title = articles[i]['title'];
        //                 var description = articles[i]['description'];
        //                 if (description == null) {
        //                     description = "";
        //                 }
        //                 var arurl = articles[i]['url'];
        //                 var source = articles[i]['source']['name'];
        //                 everything += "<div class= \"news\">";
        //                 everything += "<div class=\"imagebox\"><img src=\"" + image + "\"class=\"newspic\"></div>";
        //                 everything += "<div class= \"titlendesc\"><h4 class=\"titles\">" + title + "</h4>";
        //                 everything += "<p class=\"descrip\">" + description + "</p>";
        //                 everything += "<button class=\"linktoarticle\" onclick=\"location.href=\'" + arurl + "\'\" type=\"button\">Read more</button>";
        //                 everything += "<p class=\"source\"> Source: " + source + "</p>";
        //                 everything += "</div></div>"
        //             })


        //             $("#frontpage").html(everything);
        //         }
        //     });

            $("#searchButton").click(function(e) {
                var value = $("#keyword").val();
                console.log(value);
                e.preventDefault();

                var searchurl = 'https://newsapi.org/v2/everything?q=' +
                    value +
                    '&apiKey=794f0bc98a2a4b5a86290d23ab18ed27';

                $.ajax({
                    url: searchurl,
                    dataType: "json",
                    success: function(response_json) {
                        var everything = "<h2>Search Results For: " + value + "</h2><br>";
                        console.log(response_json);
                        var articles = response_json['articles'];

                        console.log(articles);
                        $.each(articles, function(i, item) {
                            var title = articles[i]['title'];
                            var description = articles[i]['description'];
                            var arurl = articles[i]['url'];
                            var source = articles[i]['source']['name'];
                            everything += "<div class= \"news\">";
                            everything += "<div class=\"imagebox\"><a href=\"" + arurl + "\"><img src=\"" + articles[i]['urlToImage'] + "\"class=\"newspic\"></a></div>";
                            everything += "<div class=\"titlendesc\"><h4 class=\"titles\">" + title + "</h4>";
                            everything += "<p class=\"descrip\">" + description + "</p>";
                            // everything += "<button class=\"linktoarticle\" onclick=\"location.href=\'" + arurl + "\'\" type=\"button\">Read more</button>";
                            everything += "<p class=\"source\"> Source: " + source + "</p>";
                            everything += "</div></div>"
                        })

                        $("#box").html(everything);
                        e.preventDefault();
                    }
                });
            });
        });