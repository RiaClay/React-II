import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import MdIconPack from 'react-icons/lib/md';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ searchInput: '' });
    }

    handleSearchInput = (event) => {
        this.setState({ searchInput: event.target.value });
    }

    handleKeyPress = (event) => {
        if(event.key === "Enter") {
        }
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Instagram</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Form pullLeft>
                    <input type="text" placeholder="&#xE886;" fontFamily="FontAwesome" value={this.state.searchInput} onKeyPress={this.handleKeyPress} onChange={this.handleSearchInput} />
                    <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Navbar.Form>
            </Navbar>
        )
    }
}

export default SearchBar;