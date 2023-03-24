const EmployeeSearch = () => {
    return (
        <div>
            <h2>Welcome to Employee Search</h2>
        </div>
    )
}

function EmployeeRow({ employee, style }) {
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
        </tr>
    )
}

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
                    </tr>
                </thead>

                <tbody>
                    {allEmployeesRows}
                </tbody>
            </table>
        </div>
    )
}

const EmployeeCreate = ({ AddSingleEmployee }) => {

    const [errMsgFname, setErrMsgFname] = React.useState("");
    const [errMsgLname, setErrMsgLname] = React.useState("");
    const [errMsgAge, setErrMsgAge] = React.useState("");
    const [errMsgJoiningDate, setErrMsgJoiningDate] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let form = document.forms.addEmployee;
        let isValidSubmission = true;

        const nameRegex = new RegExp('^[a-zA-Z ]+$');

        const singleEmployee = {
            FirstName: form.firstName.value.trim().toUpperCase(),
            LastName: form.lastName.value.trim().toUpperCase(),
            Age: parseInt(form.age.value),
            DateOfJoining: form.dateOfJoining.value,
            Title: form.title.value,
            Department: form.department.value,
            EmployeeType: form.employeeType.value,
            CurrentStatus: parseInt(form.currentStatus.value)
        }

        console.log(`fName>>>>>>>>>123:`,form.dateOfJoining.value);
        if (!form.firstName.value.trim()){
            setErrMsgFname("First Name required.");
            isValidSubmission = false;
        }
        if (!form.lastName.value.trim()){
            setErrMsgLname("Last Name required.");
            isValidSubmission = false;
        }
        if (!form.age.value.trim()){
            setErrMsgAge("Age is required.");
            isValidSubmission = false;
        }
        if (!form.dateOfJoining.value){
            setErrMsgJoiningDate("Joining Date is required.");
            isValidSubmission = false;
        }

        console.log('J date: ', new Date(form.dateOfJoining.value));
        console.log('Allow : ', new Date(new Date().setYear(new Date().getYear() - 30)));

        if (new Date(form.dateOfJoining.value) < new Date(new Date().setYear(new Date().getYear() - 30))){
            setErrMsgJoiningDate("Joining Date can not be greater than 30 years.");
            isValidSubmission = false;
        }

        if (new Date(form.dateOfJoining.value) > new Date()){
            setErrMsgJoiningDate("Joining Date can not be future date.");
            isValidSubmission = false;
        }

        // Regex Validations
        if (!nameRegex.test(form.firstName.value.trim())){
            setErrMsgFname("Valid First Name required.");
            isValidSubmission = false;
        }
        if (!nameRegex.test(form.lastName.value.trim())){
            setErrMsgLname("Valid Last Name required.");
            isValidSubmission = false;
        }
        if (form.age.value < 20 || form.age.value > 70){
            setErrMsgAge("Age should be between 20 to 70.");
            isValidSubmission = false;
        }

        if (isValidSubmission) AddSingleEmployee(singleEmployee);

    }

    return (
        <div>
            <h2>Welcome to the Employee Creation Form</h2>
            <div class="container">
                <form name="addEmployee" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-25">
                            <label for="firstName">First Name:</label>
                        </div>

                        <div className="col-75">
                            <input type="text" id="firstName" name="firstName" />
                            <span style={{ color: "red" }}>{errMsgFname}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="lastName">Last Name:</label>
                        </div>

                        <div className="col-75">
                            <input type="text" id="lastName" name="lastName" />
                            <span style={{ color: "red" }}>{errMsgLname}</span>
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-25">
                            <label for="age">Age:</label>
                        </div>

                        <div className="col-75">
                            <input type="text" id="age" name="age" />
                            <span style={{ color: "red" }}>{errMsgAge}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="dateOfJoining">Date of joining:</label>
                        </div>

                        <div className="col-75">
                            <input type="date" id="dateOfJoining" name="dateOfJoining" />
                            <span style={{ color: "red" }}>{errMsgJoiningDate}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="title">Title:</label>
                        </div>

                        <div className="col-75">
                            <select name="title" id="title">
                                <option value="Employee">Employee</option>
                                <option value="Manager">Manager</option>
                                <option value="Director">Director</option>
                                <option value="VP">VP</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="department">Department:</label>
                        </div>

                        <div className="col-75">
                            <select name="department" id="department">
                                <option value="IT">IT</option>
                                <option value="Marketing">Marketing</option>
                                <option value="HR">HR</option>
                                <option value="Engineering">Engineering</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="employeeType">Employee Type:</label>
                        </div>

                        <div className="col-75">
                            <select name="employeeType" id="employeeType">
                                <option value="FullTime">FullTime</option>
                                <option value="PartTime">PartTime</option>
                                <option value="Contract">Contract</option>
                                <option value="Seasonal">Seasonal</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="currentStatus">Current Status:</label>
                        </div>

                        <div className="col-75">
                            <input type="number" id="currentStatus" name="currentStatus" value="1" disabled />
                        </div>
                    </div>

                    <div className="row">

                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}


const EmployeeDirectory = () => {
    const [allEmployees, setAllEmployees] = React.useState([]);

    let query = `
        query {
            employeeDirectory {
                Id
                FirstName
                LastName
                Age
                DateOfJoining
                Title
                Department
                EmployeeType
                CurrentStatus
              }
        }
    `;

    function fetchData() {
        fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ query })
        }).then(async (response) => {
            let tempEmployees = await response.json();
            let tempDirectory = tempEmployees.data.employeeDirectory;

            setAllEmployees(tempDirectory);
        })
    }

    React.useEffect(() => {
        fetchData()
    }, []);

    const AddSingleEmployee = (singleEmployee) => {
        let query = `
            mutation AddSingleEmployee($FirstName: String!, $LastName: String, $Age: Int, $DateOfJoining: String, $Title: String, $Department: String, $EmployeeType: String, $CurrentStatus: Int) {
                addSingleEmployee(FirstName: $FirstName, LastName: $LastName, Age: $Age, DateOfJoining: $DateOfJoining, Title: $Title, Department: $Department, EmployeeType: $EmployeeType, CurrentStatus: $CurrentStatus) {
                    Id
                    FirstName
                    LastName
                    Age
                    DateOfJoining
                    Title
                    Department
                    EmployeeType
                    CurrentStatus
                }
            }
        `;

        fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query,
                variables: {
                    FirstName: singleEmployee.FirstName,
                    LastName: singleEmployee.LastName,
                    Age: singleEmployee.Age,
                    DateOfJoining: singleEmployee.DateOfJoining,
                    Title: singleEmployee.Title,
                    Department: singleEmployee.Department,
                    EmployeeType: singleEmployee.EmployeeType,
                    CurrentStatus: singleEmployee.CurrentStatus,
                }
            })
        }).then(async (response) => {
            await response.json();
            fetchData();
        })
    }

    return (
        <React.StrictMode>
            <EmployeeSearch />
            <hr />
            <EmployeeTable allEmployees={allEmployees} />
            <hr />
            <EmployeeCreate AddSingleEmployee={AddSingleEmployee} />
        </React.StrictMode> 
    )
}

const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render(<EmployeeDirectory />);