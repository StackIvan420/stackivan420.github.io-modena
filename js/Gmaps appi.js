let map;

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.8482558, lng: -58.5093266 },
        zoom: 15,
    });

    var marker = new google.maps.Marker({
        position: { lat: -34.8482562, lng: -58.5134259 },
        map: map
    })
}