function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.8282, lng: -98.5795 },
        zoom: 4,
        disableDefaultUI: true,
    })

    const neb = 
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Lincoln, Nebraska</h1>' +
        '<div id="bodyContent">' +
        "<p>Born and raised in Nebraska. I graduated from the University of Nebraska - Lincoln in May 2020 with a degree in International Business." +
        ".</p>" +
        "</div>" +
        "</div>";

    const sf =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">San Francisco, California</h1>' +
        '<div id="bodyContent">' +
        "<p>Moved to SF to accomplish my goals of becoming a  " +
        ".</p>" +
        "</div>" +
        "</div>";

    const tokyo =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Tokyo, Japan</h1>' +
        '<div id="bodyContent">' +
        "<p>Born and raised in Nebraska " +
        ".</p>" +
        "</div>" +
        "</div>";

    const uk =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">London, United Kingdom</h1>' +
        '<div id="bodyContent">' +
        "<p>Born and raised in Nebraska " +
        ".</p>" +
        "</div>" +
        "</div>";

    const korea =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Seoul, South Korea</h1>' +
        '<div id="bodyContent">' +
        "<p>Comming out of university, I knew I wanted to expand my skills in interacting " +
        ".</p>" +
        "</div>" +
        "</div>";

    const markers = [
        [40.81378318143027, -96.69350519577529, 'Lincoln', './img/corn.png', neb],
        [37.78415497496759, -122.41401683003, 'San Francisco', './img/sf.png', sf],
        [51.51488717404907, -0.16452135455793698, 'London', './img/guard.png', uk],
        [35.61245631055736, 139.55384898812062, 'Tokyo', './img/tokyo-tower_1f5fc.png', tokyo],
        [37.59231728567572, 126.70598350328325, 'Seoul', './img/cup.png', korea]
    ]

    markers.forEach(place => {
        const marker = new google.maps.Marker({
            position: {lat: place[0], lng: place[1]},
            map,
            title: place[2],
            icon: {
                url: place[3],
                scaledSize: new google.maps.Size(36, 29),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(8, 11)
            }
        })

        const infoWindow = new google.maps.InfoWindow({
            content: place[4]
        })

        marker.addListener("click", () => {
            infoWindow.open({map, anchor: marker})
        })
    })
}

window.initMap = initMap