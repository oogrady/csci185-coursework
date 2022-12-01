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
    console.log(data[0].image_url);

    if(data.length == 0) {
        document.querySelector('#tracks').innerHTML = "No results found.";
        return;
       }
    document.querySelector('#tracks').innerHTML = `
    <ul>
        <li><img src="${data[0].album.image_url}" width:30px, height:30px/>${data[0].name}</li>
        <li><img src="${data[1].album.image_url}" width:30px, height:30px/>${data[1].name}</li>
        <li><img src="${data[2].album.image_url}" width:30px, height:30px/>${data[2].name}</li>
        <li><img src="${data[3].album.image_url}" width:30px, height:30px/>${data[3].name}</li>
        <li><img src="${data[4].album.image_url}" width:30px, height:30px/>${data[4].name}</li>
    </ul>
   `
}

async function getAlbums (term) {
    const albumEndpoint = baseURL + "?q=" + term + "&type=album";
    console.log(albumEndpoint);

    const data = await fetch(albumEndpoint).then(response => response.json());
    if(data.length == 0) {
    document.querySelector('#artist').innerHTML = "No results found.";
    return;
   }
   document.querySelector('#albums').innerHTML = `
    <ul>
        <li>${data[0].name}</li>
        <li>${data[1].name}</li>
        <li>${data[2].name}</li>
        <li>${data[3].name}</li>
        <li>${data[4].name}</li>
    </ul>
   `
}

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    console.log(artistEndpoint);

    const data = await fetch(artistEndpoint).then(response => response.json());
    if(data.length == 0) {
    document.querySelector('#artist').innerHTML = "No results found.";
    return;
   }
    // console.log(data);  
    // console.log(data[0].name);
    // console.log(data[0].image_url);
    
    const template = `
    <section class="artist-card">
        <div>
            <img src="${data[0].image_url}" width:200px, height:200px/>
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
