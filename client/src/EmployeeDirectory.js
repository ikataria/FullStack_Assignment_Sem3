import EmployeeSearch from './EmployeeSearch';
import EmployeeTable from './EmployeeTable';
import EmployeeCreate from './EmployeeCreate';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';


const EmployeeDirectory = () => {
    const [allEmployees, setAllEmployees] = useState([]);
    const params = useLocation().search;
    const employeeType = new URLSearchParams(params).get('employeeType');
    const role = new URLSearchParams(params).get('role');
    const department = new URLSearchParams(params).get('department');
    
    let query = `
        query {
            employeeDirectory {
                _id
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
        fetch('http://localhost:7000/graphql', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ query })
        }).then(async (response) => {
            let tempEmployees = await response.json();

            let tempDirectory = tempEmployees.data.employeeDirectory;

            let result = [] ;
            tempEmployees.data.employeeDirectory.forEach(e=>{

                if(e.EmployeeType == employeeType){
                    result.push(e);
                } 
                if(e.Title == role) {
                    result.push(e);
                } 
                if(e.Department == department) {
                    result.push(e);
                }
  
            })

            let toDisplay = result.length > 0 ? result: tempDirectory;
            // console.log('toDisplay>>>>>>',toDisplay);
            setAllEmployees(toDisplay);
        })
    }

    useEffect(() => {
        fetchData()
    }, [employeeType, role, department]);

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

        fetch('http://localhost:7000/graphql', {
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
            console.log(__filename,`response 81`, response);

            let savedData = await response.json();
            console.log(__filename,`data to savedData 82`, savedData);
            fetchData();
        })
    }

    return (
        <div>
            <EmployeeSearch />
            <hr />
            <EmployeeTable allEmployees={allEmployees} />
            <hr />
            <EmployeeCreate AddSingleEmployee={AddSingleEmployee} />
        </div>
    )
}

export default EmployeeDirectory;