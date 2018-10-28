// let lokasi = [-7.746159, 110.373312];
// let sponsor = "Restoran Arab";

// let lokasi = [-7.779417, 110.388634];
// let sponsor = "Working space";

let places= [
    {"lokasi": [-7.746159, 110.373312], "sponsor" : "Restoran Arab"},
    {"lokasi": [-7.779417, 110.388634], "sponsor" : "Working space"},
    {"lokasi": [-7.777313, 110.384990], "sponsor" : "Restoran Preksu (Ayam Geprek & Susu)"},
    {"lokasi": [-7.832873, 110.392457], "sponsor" : "Terminal Giwangan"},
    {"lokasi": [-7.787698, 110.431700], "sponsor" : "Bandar Udara Internasional Adisucipto"},
    
    ];
    
// let marker = L.marker(lokasi).addTo(mymap)
// .bindPopup(sponsor);

for (var p of places) {
    var marker = L.marker(p.lokasi).addTo(mymap)
    .bindPopup(p.sponsor);
    }

    mymap.featureLayer.on('click', function(e) {
        mymap.panTo(e.layer.getLatLng());
        });