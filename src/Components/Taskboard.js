import React from 'react'
import "./taskboard.css"
import Navbar from './Navbar'
import { DataGrid } from '@mui/x-data-grid';
export default function Taskboard() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'PhoneNumber', headerName: 'PhoneNumbe', width: 130 },
        { field: 'Designation', headerName: 'Designation', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 10, lastName: 'Rxie', firstName: 'Harvey', age: 65, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 16, lastName: 'Melisandre', firstName: null, age: 150, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
        { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65, 'PhoneNumber': 234982364234, Designation: 'Assistant Professor' },
    ];
    return (
        <div className='Taskboard'>
            <Navbar />
            <div style={{ height: "90vh", width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    )
}
