import { BrowserRouter, Link } from "react-router-dom";


function EmployeeSearch() {
    return (
        <div>
            <h3>Employee Filters</h3>
            <nav>
                <Link to="/?employeeType=AllEmployees">AllEmployees</Link>
                {' | '}
                <Link to="/?employeeType=FullTime">FullTime</Link>
                {' | '}
                <Link to="/?employeeType=PartTime">PartTime</Link>
                {' | '}
                <Link to="/?employeeType=Contract">Contract</Link>
                {' | '}
                <Link to="/?employeeType=Seasonal">Seasonal</Link>
            </nav>
            <nav>
                <Link to="/?role=Employee">Employee</Link>
                {' | '}
                <Link to="/?role=Manager">Manager</Link>
                {' | '}
                <Link to="/?role=VP">VP</Link>
                {' | '}
                <Link to="/?role=Director">Director</Link>
            </nav>
            <nav>
                <Link to="/?department=IT">IT</Link>
                {' | '}
                <Link to="/?department=HR">HR</Link>
                {' | '}
                <Link to="/?department=Marketing">Marketing</Link>
                {' | '}
                <Link to="/?department=Engineering">Engineering</Link>
            </nav>
        </div>
    )
}
export default EmployeeSearch;