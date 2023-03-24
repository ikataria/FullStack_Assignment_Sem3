import EmployeeRow from './EmployeeRow'


const EmployeeTable = ({ allEmployees }) => {
    const style = {
        border: "1px solid red",
        "font-size": "20px"
    }

    const allEmployeesRows = allEmployees.map(employee => (
        <EmployeeRow employee={employee} style={style} />
    ))

    return (
        <div>
            <h2>Welcome to the Employee Table</h2>
            <table style={style}>
                <thead>
                    <tr>
                        <th style={style}>ID</th>
                        <th style={style}>First Name</th>
                        <th style={style}>Last Name</th>
                        <th style={style}>Age</th>
                        <th style={style}>Date of joining</th>
                        <th style={style}>Title</th>
                        <th style={style}>Department</th>
                        <th style={style}>Employee Type</th>
                        <th style={style}>Current Status</th>
                        <th style={style}>EDIT</th>
                    </tr>
                </thead>

                <tbody>
                    {allEmployeesRows}
                </tbody>
            </table>
        </div>
    )
}


export default EmployeeTable;