import React, { Component, useEffect, useState } from 'react'
import SearchBar from '../SearchBar/Searchbar'
import EmployeeTable from '../EmployeeTable/EmployeeTable'
import API from '../../utils/API'
import Wrapper from '../Wrapper/Wrapper';

class MainContainer extends Component {
    state = {
        employees: [],
        search: ''
    };

    componentDidMount() {
        API.getUsers()
            .then((res) =>
                this.setState({
                    employees: res.data.results,
                }))
            .catch((err) => console.log(err))
    };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({ search: value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <Wrapper>
            <SearchBar 
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
            <div className='container mt-4'>
            
            <EmployeeTable
            state={this.state}
            sortBy={this.sortBy}
            filterEmployees={this.filterEmployees}
            formatDate={this.formatDate}
          />
            </div>
            </Wrapper>
        )
    }
}

export default MainContainer;