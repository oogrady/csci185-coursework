const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
        
    }
}

async function getTracks (term) {
    const tracksEndpoint = baseURL + "?q=" + term + "&type=track";
    console.log(tracksEndpoint);
    const data = await fetch(tracksEndpoint).then(response => response.json());
    console.log(data);
    if(data.length == 0) {
        document.querySelector('#track').innerHTML = "No results found.";
        return;
       }
    document.querySelector('#tracks').innerHTML = "";
    for (let i = 0; i < 5; i++) {
    const template = `
            <section class="track-item preview" onclick="playSong('${data[i].id}')">
                <img src="${data[i].album.image_url}" alt = "Album photo for ${data[i].name}">
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2>${data[i].name}</h2>
                    <p>
                        ${data[i].artist.name}
                    </p>
                </div>
        </section>
    `;
    document.querySelector('#tracks').insertAdjacentHTML('beforeend', template);
    }
}
function playSong(id) {
    const template = `
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" width="100%" 
    height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
     loading="lazy"></iframe>
    `;
    document.querySelector('#artist').innerHTML = template;
}
async function getAlbums (term) {
    const albumEndpoint = baseURL + "?q=" + term + "&type=album";
    console.log(albumEndpoint);
    const data = await fetch(albumEndpoint).then(response => response.json());
    if(data.length == 0) {
    document.querySelector('#albums').innerHTML = "No results found.";
    return;
   }
   document.querySelector('#albums').innerHTML = "";
   for (let i = 0; i < 5; i++) {
   const template = `
    <section class="album-card" id="${data[i].id}">
    <div>
        <img src="${data[i].image_url}" alt = "Album photo for ${data[i].name}">
        <h2>${data[i].name}</h2>
        <div class="footer">
            <a href="https://open.spotify.com/album/${data[i].id}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
    </section>
   `;
   document.querySelector('#albums').insertAdjacentHTML('beforeend', template);
   }}

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    console.log(artistEndpoint);
    const data = await fetch(artistEndpoint).then(response => response.json());
    if(data.length == 0) {
    document.querySelector('#artist').innerHTML = "No results found.";
    return;
   }
   document.querySelector('#artist').innerHTML = "";
    const template = `
    <section class="artist-card">
        <div>
            <img src="${data[0].image_url}" alt = "A photo of ${data[0].name}">
                <div class="card-footer">
                    <div>
                        <h2>${data[0].name}</h2>
                            <p>Popularity: ${data[0].popularity}</p>
                        </div>
                    </div>
                 </div>
            </section>
    `;
    
    document.querySelector('#artist').innerHTML = template;
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}
