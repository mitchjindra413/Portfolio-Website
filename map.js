function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39.8282, lng: -98.5795 },
        zoom: 2,
        disableDefaultUI: true,
    })

    const neb = 
        '<div id="content">' +
        '<h1 class="firstHeading">Nebraska</h1>' +
        '<div id="bodyContent">' +
        "<p>Nebraskan born and raised. I graduated from the University of Nebraska - Lincoln in May 2020 with a degree in International Business. Being raised in Nebraska instilled a strong work ethic and commitment in me. </p>" +
        '<h1 class="recomendationsHeading">Top things to do:</h1>' +
        '<ul class="recomendations">' +
        "<li>Attend a Huskers football game</li>" +
        "<li>Visit the Henry Doorly Zoo</li>" +
        "<li>Sky watch as a thunder storm rolls in</li>" +
        "</ul>" +
        "</div>" +
        "</div>"

    const sf =
        '<div id="content">' +
        '<h1 class="firstHeading">San Francisco</h1>' +
        '<div id="bodyContent">' +
        "<p>I moved to San Francisco to accomplish my goal of becoming a software engineer. I completed an intensive full-stack boot camp where I gained skills working with technologies such as React, Ruby on Rails, and Express. My greatest accomplishment during this time was creating and deploying a clone of Airbnb within 10 days.</p>" +
        '<h1 class="recomendationsHeading">Top things to do:</h1>' +
        '<ul class="recomendations">' +
        "<li>Stroll through Golden Gate or Dolores park</li>" +
        "<li>Visit the sea lions at Pier 39</li>" +
        "<li>See the red woods</li>" +
        "</ul>" +
        "</div>" +
        "</div>"

    const tokyo =
        '<div id="content">' +
            '<h1 class="firstHeading">Tokyo, Japan</h1>'+
            '<div id="bodyContent">' +
                "<p>I spent part of my undergraduate in the Tokyo metropolitan area (Kawasaki, to be precise). There I took an intensive language program to improve my Japanese speaking ability. I'm a little rusty because I haven't lived in an area with many Japanese speakers, so I'd love to find someone to practice with!</p>" +
                '<h1 class="recomendationsHeading">Top things to do:</h1>' +
                '<ul class="recomendations">' +
                    "<li>Belt out your favorite songs in a private Karaoke room</li>" +
                    "<li>Visit Asakusa</li>" +
                    "<li>Eat at Ichiran</li>" +
                "</ul>" +
            "</div>" +
        "</div>"

    const korea =
        '<div id="content">' +
        '<h1 class="firstHeading">Seoul, South Korea</h1>' +
        '<div id="bodyContent">' +
        "<p>After graduation, I went to South Korea to teach English. There I honed my skills in communication and team management. My favorite part about the experience was seeing the growth in my students and the connections I formed with them and the other teachers.</p>" +
        '<h1 class="recomendationsHeading">Top things to do:</h1>' +
        '<ul class="recomendations">' +
        "<li>Cafe hop around Hongdae</li>" +
        "<li>Hike up Namsan Mountain</li>" +
        "<li>Eat SO MUCH kimchi</li>" +
        "</ul>" +
        "</div>" +
        "</div>"

    const uk =
        '<div id="content">' +
        '<h1 class="firstHeading">London, UK</h1>' +
        '<div id="bodyContent">' +
        "<p>I moved to London during the summer of my Junior year to work as a Financial Intern. I loved using my analytical and problem-solving skills daily while living in my favorite city!</p>" +
        '<h1 class="recomendationsHeading">Top things to do:</h1>' +
        '<ul class="recomendations">' +
        "<li>Show off your trivia skills at a Pub quiz</li>" +
        "<li>Visit the markets in Borough and Camden</li>" +
        "<li>Catch a show in the West End</li>" +
        "</ul>" +
        "</div>" +
        "</div>"

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