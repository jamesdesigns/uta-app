const mapsModule = require("nativescript-google-maps-sdk");

function onMapReady(args) {
  const mapView = args.object;

  console.log("Setting a marker...");
  const marker = new mapsModule.Marker();
  marker.position = mapsModule.Position.positionFromLatLng(-33.86, 151.20);
  marker.title = "Sydney";
  marker.snippet = "Australia";
  marker.userData = { index : 1 };
  mapView.addMarker(marker);

  // Disabling zoom gestures
  mapView.settings.zoomGesturesEnabled = false;
}

function onMarkerSelect(args) {
  //  console.log("Clicked on " +args.marker.title);
}

function onCameraChanged(args) {
    // console.log("Camera changed: " + JSON.stringify(args.camera));
}

function onCameraMove(args) {
    // console.log("Camera moving: "+JSON.stringify(args.camera));
}

exports.onMapReady = onMapReady;
exports.onMarkerSelect = onMarkerSelect;
exports.onCameraChanged = onCameraChanged;
exports.onCameraMove = onCameraMove;
