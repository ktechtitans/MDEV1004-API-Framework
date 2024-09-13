let APIKEY = "whMJA1BtHGkIDQLnU9Mc4X6BLM1Aj4JM";

document.addEventListener("DOMContentLoaded", init);

function init() {
    document.getElementById("searchButton").addEventListener("click", ev => {
        ev.preventDefault();
        let str = document.getElementById("searchInput").value.trim();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&q=${str}`;
        console.log(url);

        fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log(content.data); 
                console.log('META', content.meta);

                let out = document.querySelector('.out');
                out.innerHTML = ''; 

                content.data.forEach(gif => {
                    let fig = document.createElement('figure');
                    let img = document.createElement('img');
                    img.src = gif.images.downsized.url;
                    fig.appendChild(img);
                    out.insertAdjacentElement('beforeend', fig); 
                });
            })
            
            .catch(err => {
                console.error(err);
            });
    });
    
}