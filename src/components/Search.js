import React from "react";
import "./Search.css";
import getCountries from "../services/http.service";

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = { 
            countries: [],
            searchValue: '',
            filteredCountries: []
        };

        this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
    }

    componentDidMount() {
        getCountries().then((data) => {
            this.setState({ countries: data.data.data });
        }, (error) => {
            console.log(error);
        });
    }

    handleSearchValueChange(event) {
        let term = event.target.value;
        this.setState({ searchValue: event.target.value });

        if (term && term.length >= 3) {
            term = term.trim().toLowerCase();
            let filteredCountries = this.state.countries.filter(d => d.name.toLowerCase().startsWith(term));
            this.setState({ filteredCountries });
        } else {
            this.setState({ filteredCountries: [] });
        }
    }

    handleOptionClick(event) {
        let selected = event.target.innerHTML;
        this.setState({ searchValue: selected, filteredCountries: [] });
    }

    handleSubmit(event) {
        let country = this.state.countries.find(d => d.name.toLowerCase() === this.state.searchValue.toLowerCase());
        event.preventDefault();
        this.props.onSearchSubmit(country);
    }

    render() {
        return <form className="searchForm" onSubmit={this.handleSubmit}>
            <label>Search countries here:</label>
            <div>
                <input className="searchInput" type="text" autoComplete="off" value={this.state.searchValue} 
                    onChange={this.handleSearchValueChange}>
                </input>
                <ul className="autocomplete-container">
                    {this.state.filteredCountries.map(c => (
                        <li key={c.iso2} className="autocomplete-options" onClick={this.handleOptionClick}>
                            {c.name}
                        </li>
                    ))}
                </ul>
            </div>
            
            <input className="submitButton" type="submit" value="Search"></input>
        </form>;
    }
}