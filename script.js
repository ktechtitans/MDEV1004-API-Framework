const apiKey = 'whMJA1BtHGkIDQLnU9Mc4X6BLM1Aj4JM';

function searchGIFs() {
  const searchInput = document.getElementById('searchInput').value;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchInput}&limit=10`;

 fetch(url)
    .then(response => response.json())
    .then(data => {
      const gifContainer = document.getElementById('gifContainer');
      gifContainer.innerHTML = ''; 

      data.data.forEach(gif => {
        const img = document.createElement('img');
        img.src = gif.images.fixed_height.url;
        gifContainer.appendChild(img);
      });
    })
    .catch(error => {
      console.error('Error fetching GIFs:', error);
    });
}

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('gifContainer').innerHTML = '';  
    document.getElementById('searchInput').value = '';      
  });

document.getElementById('searchButton').addEventListener('click', searchGIFs);