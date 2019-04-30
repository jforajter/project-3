      var map;
	  function initMap() {
		  var canyon = {lat: 36.0544, lng: -112.1401};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: canyon,
          zoom: 8
        });
		var marker = new google.maps.Marker({
			icon:{
				path: google.maps.SymbolPath.CIRCLE,
				scale:150
			},
			draggable: true,
			animation: google.maps.Animation.DROP,
			position: canyon,
			map: map,
			title: 'this is canyon'
		});
      }