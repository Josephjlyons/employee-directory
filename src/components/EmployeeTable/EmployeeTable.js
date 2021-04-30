import React from 'react';
import './EmployeeTable.css'



const EmployeeTable = (props) => {

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>Picture</th>
                    <th scope='col' data-field="name" data-sortable='true'>
                        <span onClick={() => props.onSort('name', 'last', 'first')}>Name</span>
                    </th>
                    <th scope="col">
                        <span onClick={() => props.onSort('phone')}>Phone</span>
                    </th>
                    <th scope="col">
                        <span onClick={() => props.onSort('email')}>Email</span>
                    </th>
                    <th scope="col">
                        <span onClick={() => props.onSort('dob', 'date')}>DOB</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.state.filteredEmployees.map((employee) => {
                    const { first, last } = employee.name;
                    const fullName = `${first} ${last}`;

                    // Format date
                    const dob = props.formatDate(employee.dob.date);

                    return (
                        <tr>
                            <td>
                                <img className='img' src={employee.picture.thumbnail} alt={fullName} />
                            </td>
                            <td className='row-data'>{fullName}</td>
                            <td className='row-data'>
                                <a href={`tel:${employee.phone}`}>{employee.phone}</a></td>
                            <td className='row-data email'>
                                <a href={`mailto:${employee.email}`}>{employee.email}</a>
                            </td>
                            <td className='row-data'>{dob}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default EmployeeTable;