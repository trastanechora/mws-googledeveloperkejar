// let lokasi = [-7.746159, 110.373312];
// let sponsor = "Restoran Arab";

// let lokasi = [-7.779417, 110.388634];
// let sponsor = "Working space";

let places= [
    {"lokasi": [-7.746159, 110.373312], "sponsor" : "Restoran Arab"},
    {"lokasi": [-7.779417, 110.388634], "sponsor" : "Working space"}
    ];

// let marker = L.marker(lokasi).addTo(mymap)
// .bindPopup(sponsor);

for (var p of places) {
    var marker = L.marker(p.lokasi).addTo(mymap)
    .bindPopup(p.sponsor);
    }