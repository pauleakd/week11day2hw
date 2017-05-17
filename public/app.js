
var initialize = function(){
  var center = {lat: 51.4, lng: -0.12}
  var zoom = 5
  var container = document.getElementById("main-map")

  var mainMap = new MapWrapper(center, zoom, container);
  mainMap.addMarker(center)
  mainMap.addMarker({lat: 19.059896, lng: 20.493242})
  mainMap.addMarker({lat: 54.898521, lng: 23.903597})
  mainMap.addClickEvent()
  mainMap.addInfoWindowToMarker(0, "This is the best place")

  var button = document.querySelector("button")
  // mappyMap = document.querySelector("main-map")
  button.addEventListener("click", mainMap.takeMeToKaunas.bind(mainMap));
}






window.addEventListener("load", initialize)
