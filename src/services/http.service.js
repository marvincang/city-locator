import axios from 'axios';

function getCountries() {
    return axios.get('https://countriesnow.space/api/v0.1/countries/positions');
}

export default getCountries;