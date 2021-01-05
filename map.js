// Initialize and add the map
var map2, map3, map4;

function initMap() {
    // The location of Lifetime Wayne, PA
    const malvern = { lat: 40.03094379551315, lng: -75.62785300536765};
    const pMOA = { lat: 39.96589684702076, lng: -75.1817300247673}

    var myOptions = {
        zoom: 15,
        center: malvern
    }

    var myOptions2 = {
        zoom: 15,
        center: pMOA
    }

    map2 = new google.maps.Map(document.getElementById("malvern"), myOptions);
    map3 = new google.maps.Map(document.getElementById("map2"), myOptions2);
    map4 = new google.maps.Map(document.getElementById("map3"), myOptions2);



    // The map, centered at Uluru
    // const map = new google.maps.Map(document.getElementById("map"), {
    //     zoom: 15,
    //     center: lifetime,
    // });
    // The marker, positioned at Lifetime
    const marker = new google.maps.Marker({
        position: lifetime,
        map: map,
    });
}

