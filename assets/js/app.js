(function () {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function (position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				var map = new google.maps.Map(document.getElementById('map'), {
					center: pos,
					zoom: 18,
					mapTypeId: 'roadmap'
				});

				var infoWindow = new google.maps.InfoWindow({
					map: map,
					position: pos,
					content: "You"
				});
			},
			function (error) {
				document.getElementById("map").innerHTML =
					`<p>${error.message}</p>`;
			}, {
				enableHighAccuracy: true,
				timeout: 60000,
				maximumAge: 0
			}
		);
	} else {
		document.body.innerHTML =
			'<h1>Ops, não foi possível pegar a localização. Por favor atualizar seu navegador!</h1>';
	}
})();
