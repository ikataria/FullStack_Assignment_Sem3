import EmployeeRow from './EmployeeRow'


const EmployeeTable = ({ allEmployees }) => {
    const style = {
        "border": "1px solid black",
        "font-size": "20px",
        "margin": "auto"
    }

    const allEmployeesRows = allEmployees.map(employee => (
        <EmployeeRow employee={employee} style={style} />
    ))

    return (
        <div>
            <h3>Welcome to the Employee Table</h3>
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
                        <th style={style}>DELETE</th>
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