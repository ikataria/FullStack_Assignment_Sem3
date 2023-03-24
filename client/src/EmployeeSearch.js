import { BrowserRouter, Link } from "react-router-dom";


function EmployeeSearch() {
    return (
        <div>
            <h3>Welcome to EmployeeSearch </h3>
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
                    {' | '}
                    <Link to="/list?employeeType=Person-B">Person-B</Link>
                </nav>
        </div>
    )
}
export default EmployeeSearch;