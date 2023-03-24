import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeEdit() {
    let navigate = useNavigate()
    const { id } = useParams()
    const [ employee,setEmployeeDetails] = useState({});
    const fetchData = async (id) => {
        let query = `
            query  {
                getEmployeeById(Id:"${id}") {
                        _id,
                        FirstName,
                        LastName,
                        Age,
                        DateOfJoining,
                        Title,
                        Department,
                        EmployeeType,
                        CurrentStatus
                }
        }
        `;
        fetch('http://localhost:7000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        }).then(async (response) => {
            let employeeList = await response.json();
            setEmployeeDetails(employeeList.data.getEmployeeById)
        })
    }


    function updateEmpDetails(e){
        let form = document.forms.addEmployeeForm;
        e.preventDefault();
        let query = `
            mutation updateEmployee($Id:String,$Title:String,$Department:String,$CurrentStatus: Int){
                updateEmployee(Id:$Id,Title:$Title,Department:$Department,CurrentStatus:$CurrentStatus)
            }
        `;

        fetch('http://localhost:7000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables: {Id:id, Title: form.title.value,Department: form.department.value, Age: employee.age, CurrentStatus:document.getElementById("statusChk").checked?1:0 } })
        }).then(async (response) => {
            await response.json();
            navigate("/"); 
        })
    }

    useEffect(function () {
        fetchData(id)
    }, [id]);
    
    return (
        <div>
            <h3>Welcome to Employee edit</h3>
            <form name="addEmployeeForm" onSubmit={updateEmpDetails}>
                <div class="row">
                    <div className="col-25">
                        <label for="firstName">First Name:</label>
                    </div>

                    <div className="col-75">
                        <input type="text" pattern='[A-Za-z\\s]*' disabled value={employee?.FirstName} id="firstName" name="firstName" class="form-control" />
                    </div>
                </div>

                {/* LastName */}
                <div class="row">
                    <div className="col-25">
                    <label for="lastName">Last Name:</label>
                    </div>

                    <div className="col-75">
                        <input type="text" disabled value={employee?.LastName} pattern='[A-Za-z\\s]*' required id="lastName" name="lastName" class="form-control" />
                    </div>
                </div>

                {/* Age */}
                <div class="row">
                    <div className="col-25">
                    <label for="age">Age:</label>
                    </div>

                    <div className="col-75">
                        <input type="number" disabled value={employee?.Age} id="age" name="age" class="form-control" />
                    </div>
                </div>

                {/* Title */}
                <div class="row">
                    <div className="col-25">
                        <label for="title">Title</label>
                    </div>

                    <div className="col-75">
                        {
                            <select id="title" class="form-control" name="title">
                                {
                                    ["Employee","Manager","Director","VP"].map((item)=>{
                                        return item==employee.Title?
                                        (<option selected>{item}</option>)
                                        :(<option>{item}</option>)
                                    })
                                }
                            </select>
                        }
                    </div>
                </div>

                {/* Department */}
                <div class="row">
                    <div className="col-25">
                        <label for="department">Department</label>
                    </div>

                    <div className="col-75">
                        {
                            <select id="department" class="form-control" name="department">
                                {
                                    ["IT","Marketing","HR","Engineering"].map((item)=>{
                                        return item==employee.Department?
                                        (<option selected>{item}</option>)
                                        :(<option>{item}</option>)
                                    })
                                }
                            </select>
                        }
                    </div>
                </div>

                {/* Employee Type */}
                <div class="row">
                    <div className="col-25">
                        <label for="employeeType">EmployeeType</label>
                    </div>

                    <div className="col-75">
                        <select id="employeeType" disabled value={employee?.EmployeeType} class="form-control" name="employeeType">
                                <option>FullTime</option>
                                <option>PartTime</option>
                                <option>Contract</option>
                                <option>Seasonal</option>
                            </select>
                    </div>
                </div>

                {/* Employee Status */}
                <div class="row">
                    <div className="col-25">
                        <label for="CurrentStatus">Employee Status</label>
                    </div>

                    <div className="col-75">
                        <input className="form-check-input" type="radio" name="status" value={"Working"} id="statusChk" checked />Working
                        <input className="form-check-input" type="radio" name="status" value={"Retired"} id="retired"/>Retired
                    </div>
                </div>


                <br />
                <button type="submit" className="btn btn-primary">Update Employee</button>
            </form>
        </div>
    )
}
export default EmployeeEdit;