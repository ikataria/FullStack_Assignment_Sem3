import { BrowserRouter, Link } from "react-router-dom";

function EmployeeRow({ employee, style }) {

    async function deleteRow(){
        const query = `
                query  {
                    deleteRow(Id:"${employee._id}") {
                        FirstName
                    }
              }
            `;
            fetch('http://localhost:7000/graphql', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query})
            }).then(async (response) => {
                await response.json();
                window.location.assign("/")
            })
    }

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
            <td><button onClick={deleteRow}>Delete</button></td>
            
        </tr>
    )
}

export default EmployeeRow;