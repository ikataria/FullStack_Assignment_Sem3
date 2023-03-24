import { useState } from "react";



const EmployeeCreate = ({ AddSingleEmployee }) => {

    const [errMsgFname, setErrMsgFname] = useState("");
    const [errMsgLname, setErrMsgLname] = useState("");
    const [errMsgAge, setErrMsgAge] = useState("");
    const [errMsgJoiningDate, setErrMsgJoiningDate] = useState("");

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

        // console.log(`fName>>>>>>>>>123:`,form.dateOfJoining.value);
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

        // console.log('J date: ', new Date(form.dateOfJoining.value));
        // console.log('Allow : ', new Date(new Date().setYear(new Date().getYear() - 30)));

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

        if (isValidSubmission){
            // console.log(__filename,`ready to create`, singleEmployee);
            AddSingleEmployee(singleEmployee);
        }

    }

    return (
        <div>
            <h3>Welcome to the Employee Creation Form</h3>
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
                            <input type="number" id="age" name="age" />
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

export default EmployeeCreate;