import { BrowserRouter, Link } from "react-router-dom";

function EmployeeRow({ employee, style }) {

    const edit = `/edit/${employee._id}`
    return (
        <tr>
            <td style={style}>{employee.Id}</td>
            <td style={style}>{employee.FirstName}</td>
            <td style={style}>{employee.LastName}</td>
            <td style={style}>{employee.Age}</td>
            <td style={style}>{new Date(parseInt(employee.DateOfJoining)).toDateString()}</td>
            <td style={style}>{employee.Title}</td>
            <td style={style}>{employee.Department}</td>
            <td style={style}>{employee.EmployeeType}</td>
            <td style={style}>{employee.CurrentStatus}</td>

            <td style={style}><Link to={`/edit/${employee._id}`}>Edit</Link></td>

        </tr>
    )
}

export default EmployeeRow;