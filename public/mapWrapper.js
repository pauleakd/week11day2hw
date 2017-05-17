var MapWrapper = function(coordinates, zoomm, container){

  this.googleMap = new google.maps.Map(container, {
    zoom: zoomm,
    center: coordinates
  })
  this.markers = []
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
    this.markers.push(marker)
  },
  addInfoWindowToMarker: function(index, info){
    var infowindow = new google.maps.InfoWindow({
   content: info
    });
    this.markers[index].addListener("click", function(){
      infowindow.open(this.googleMap, this.markers[index]);
    }.bind(this))
  },
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){
      // console.log("yo")
      // console.log(event)
      // console.log(event.latLng.lat())
      // console.log(event.latLng.lng())
      var position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
      this.addMarker(position)
    }.bind(this))
  },
  takeMeToKaunas: function(){
      console.log("hihi")
      console.log(this)
      this.googleMap.setCenter({lat: 54.898521, lng: 23.903597})
  }
}
