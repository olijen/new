$(document).ready(function() {
	console.log("Hello!");
	event.originalEvent.defaultPrevented;
	navigator.geolocation.getCurrentPosition(function(position) {

	// Текущие координаты.
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;
	alert(lat + "" + lng);
	// Отрисовка карты.
	/*var map = new GMaps({
	    el: '#map',
	    lat: lat,
	    lng: lng
	});

	map.addMarker({
	    lat: lat,
	    lng: lng
	});

	});*/

	});
});
