      var map;
	  function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 36.0544, lng: -112.1401},
          zoom: 8
        });
		
		var marker = new google.maps.Marker({
		  position: tower,
		  map: map,
		  animation: google.maps.Animation.BOUNCE,
		  icon: 'images/marker.png'
		  });

		  
		marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
      }