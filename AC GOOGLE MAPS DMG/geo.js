//window.onload = miUbicacion;
function miUbicacion() {
	// Si los servicios de geolocalización están disponibles
	if (navigator.geolocation) {
		// Para obtener la ubicación actual llama getCurrentPosition.
		navigator.geolocation.getCurrentPosition(
			siHayExito,
			siHayError,
			{ enableHightAccuracy: false, timeout: Infinity, maximage: 0 });
	} else {
		alert("Los servicios de geolocalizacion no estan disponibles");
	}
}
function siHayExito(posicion) {
	var latitud = posicion.coords.latitude
	var longitud = posicion.coords.longitude
	alert("Latitud: " + latitud + "  Longitud: " + longitud);
	initMap(latitud, longitud);
}

function siHayError(error) {//errorHandler
	// el objeto posiblesErrores traduce al castellano los posibles errores
	var posiblesErrores = {
		0: "Error desconocido",
		1: "Permiso denegado por el usuario.",
		2: "Posicion no disponible",
		3: "Desconexion por tiempo"
	}
	var mensajeError = posiblesErrores[error.code];
	// error.message : información adicional
	if (error.code == 0 || error.code == 2) {
		mensajeError = mensajeError + " " + error.message;
	}
	var div = document.getElementById("ubicacion");
	div.innerHTML = mensajeError;
}

var map;
function initMap(latitud, longitud) {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: latitud, lng: longitud },
		zoom: 13
	});
	var marker = new google.maps.Marker({
		position: { lat: latitud, lng: longitud },
		map: map,
		title: 'DIEGO MARQUEZ GOMEZ: ID 245119'
	});
}