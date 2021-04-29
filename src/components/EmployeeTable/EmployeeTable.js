import React from 'react';
import API from '../../utils/API'
import './EmployeeTable.css'


const EmployeeTable = (props) => {
    return (
        <table className='table table-striped table-sortable text-center'>
            <thead>
                <tr>
                    <th scope='col'>Image</th>
                    <th scope='col' data-field="name" data-sortable='true'>
                        <span>Name</span>
                    </th>
                    <th scope="col">
                        <span>Phone</span>
                    </th>
                    <th scope="col">
                        <span>Email</span>
                    </th>
                    <th scope="col">
                        <span>DOB</span>
                    </th>
                </tr>
            </thead>
        </table>
    )
}

export default EmployeeTable;