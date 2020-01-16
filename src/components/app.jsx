import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
import mapboxgl from 'mapbox-gl';
import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';
mapboxgl.accessToken = 'pk.eyJ1IjoidGVydWtvIiwiYSI6ImNrMmdpYzB5YzB2OHYzYnQ4dmM5ZWIxdnoifQ.ZIcsuOzZgmO__rcs5POD0g';


class App extends Component {
  map;
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats,
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }

  setMarker() {
  // add markers to map
  // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(this.center())
      .addTo(this.map);
  }
  // getFeatures() {
  //  const features = [];
  //  this.state.flats.forEach(item => {
  //   features[] = {
  //     'type': 'Feature',
  //     'properties': {},
  //     'geometry': {
  //       'type': 'Point',
  //       'coordinates': [
  //       item.lng, item.lat
  //       ]
  //     }
  //   }
  // });
  //  return features;
  // }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    this.setMarker();
  }

// const features = this.getFeatures();


//     map.on('load', function() {
// // Add a symbol layer.
// map.addLayer({
// 'id': 'symbols',
// 'type': 'symbol',
// 'source': {
// 'type': 'geojson',
// 'data': {
// 'type': 'FeatureCollection',
// 'features':
// }
// },
// 'layout': {
// 'icon-image': 'rocket-15'
// }
// });

// // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
// map.on('click', 'symbols', function(e) {
// map.flyTo({ center: e.features[0].geometry.coordinates });
// });
//   }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }


  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div ref={el => this.mapContainer = el} className='mapContainer' />




      </div>
    );
  }
}

export default App;
