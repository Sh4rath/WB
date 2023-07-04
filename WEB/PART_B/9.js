function getLocation() {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  else alert("Geoloc not supported by the browser");
}
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  alert(`Longitude: ${latitude}  Longitude: ${longitude}`);
}
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Permission denied");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Position unavailable");
      break;
    case error.TIMEOUT:
      alert("Timeout");
      break;
    case error.UNKNOWN_ERROR:
      alert("Unknown error");
      break;
  }
}
getLocation();
