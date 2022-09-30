import React from "react";
import './Map.css';
import * as L from "leaflet";
import Search from "./Search";

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'centerX': 0, 'centerY': 0, 'map': {} };
        this.map = '';

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    componentDidMount() {
        if (!this.map) {
            let map = L.map('map-container').setView([51.505, -0.09], 13);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap'
            }).addTo(map);
    
            this.map = map;
        }
    }

    onSearchSubmit(country) {
        if (this.map && country) {
            this.map.setView([country.lat, country.long], 5);
        }
    }
            
    render() {
        return <div className="page-body-container">
            <Search onSearchSubmit={this.onSearchSubmit}></Search>
            <div id="map-container"></div>
        </div>
    }
}