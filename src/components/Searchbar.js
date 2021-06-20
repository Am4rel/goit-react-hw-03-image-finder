import React, { Component } from 'react';

import '../styles.css';

export default class Searchbar extends Component {
    state = {
        searchQuery: ""
    }

    onFormInput = e => {
        const value = e.target.value;

        this.setState({ searchQuery: value });
    }

    onFormSubmit = e => {
        e.preventDefault();

        const query = this.state.searchQuery;
        this.setState({ searchQuery: "" });
        
        this.props.submit(query);
    }

    render() {
        
        return <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.onFormSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.onFormInput}
                />
            </form>
        </header>
    }
};