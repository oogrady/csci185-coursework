const photos = [
    { image_url: 'images/poppies.jpg', is_favorite: true },
    { image_url: 'images/dogwoods.jpg', is_favorite: true },
    { image_url: 'images/blossom.jpg', is_favorite: false },
    { image_url: 'images/field3.jpg', is_favorite: false },
    { image_url: 'images/field4.jpg', is_favorite: false },
    { image_url: 'images/branch.jpg', is_favorite: true },
    { image_url: 'images/red.jpg', is_favorite: true },
    { image_url: 'images/purple2.jpg', is_favorite: false },
    { image_url: 'images/field1.jpg', is_favorite: false },
    { image_url: 'images/purple.jpg', is_favorite: true },
    { image_url: 'images/jar.jpg', is_favorite: true },
    { image_url: 'images/green.jpg', is_favorite: false },
    { image_url: 'images/green1.jpg', is_favorite: true },
    { image_url: 'images/purple1.jpg', is_favorite: false },
    { image_url: 'images/magnolias.jpg', is_favorite: false },
    { image_url: 'images/daisy1.jpg', is_favorite: true }
];

for (let i = 0; i < photos.length; i++) {
    if(photos[i].is_favorite == true){
    const html = `
    <div class="card">
    <img src="${photos[i].image_url}"/>
    </div>`
    document.querySelector(".images").insertAdjacentHTML('beforebegin', html);
    }
}

