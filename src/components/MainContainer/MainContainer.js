import React, { Component } from 'react'
import SearchBar from '../SearchBar/Searchbar'
import EmployeeTable from '../EmployeeTable/EmployeeTable'
import API from '../../utils/API'
import Wrapper from '../Wrapper/Wrapper';

class MainContainer extends Component {
    state = {
        employees: [],
        search: '',
        filteredEmployees: [],
        sorting: this.initialsorting,
    };


    get initialsorting() {
        return {
            name: "",
            phone: "",
            email: "",
            dob: "",
        };
    }

    componentDidMount() {
        API.getUsers()
            .then((res) =>
                this.setState({
                    employees: res.data.results,
                    filteredEmployees: res.data.results,
                }))
            .catch((err) => console.log(err))
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({ search: value });
        this.searchEmployees(value.trim())
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
    };


    onSort = (key, primary = 0, secondary = 0) => {
        let sortedEmployees = this.state.filteredEmployees;
        if (this.state.sorting[key]) {
            this.setState({
                filteredEmployees: sortedEmployees.reverse(),
                sorting: {
                    ...this.initialsorting,
                    [key]: this.state.sorting[key] === "asc" ? "desc" : "asc",
                },
            });
        } else {
            sortedEmployees = this.state.filteredEmployees.sort((a, b) => {
                a = a[key];
                b = b[key];
                if (primary) {
                    if (secondary && a[primary] === b[primary]) {
                        return a[secondary].localeCompare(b[secondary]);
                    }
                    return a[primary].localeCompare(b[primary]);
                } else {
                    return a.localeCompare(b);
                }
            });

            this.setState({
                filteredEmployees: sortedEmployees,
                sorting: {
                    ...this.initialsorting,
                    [key]: "asc",
                },
            });
        }
    };

    searchEmployees = (input) => {
        if (input) {
            this.setState({
                filteredEmployees: this.state.employees.filter((employee) => {
                    return (
                        employee.name.first
                            .concat(" ", employee.name.last)
                            .includes(input) ||
                        employee.phone.includes(input) ||
                        employee.phone.includes(input) ||
                        employee.email.includes(input) ||
                        this.formatDate(employee.dob.date).includes(input)
                    );
                }),
            });
        } else {
            this.setState({ filteredEmployees: this.state.employees });
        }
    };



    formatDate = (date) => {
        date = new Date(date);
        let dob = [];
        dob.push("" + (date.getMonth() + 1));
        dob.push("" + date.getDate());
        dob.push(date.getFullYear());

        // Join formatted date
        return dob.join('/')

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
                        onSort={this.onSort}
                        filterEmployees={this.filterEmployees}
                        formatDate={this.formatDate}
                    />
                </div>
            </Wrapper>
        )
    }
}

export default MainContainer;