const EmployeeSearch = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Welcome to Employee Search"));
};
function EmployeeRow({
  employee,
  style
}) {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: style
  }, employee.Id), /*#__PURE__*/React.createElement("td", {
    style: style
  }, employee.FirstName), /*#__PURE__*/React.createElement("td", {
    style: style
  }, employee.LastName), /*#__PURE__*/React.createElement("td", {
    style: style
  }, employee.Age), /*#__PURE__*/React.createElement("td", {
    style: style
  }, new Date(parseInt(employee.DateOfJoining)).toDateString()), /*#__PURE__*/React.createElement("td", {
    style: style
  }, employee.Title), /*#__PURE__*/React.createElement("td", {
    style: style
  }, employee.Department), /*#__PURE__*/React.createElement("td", {
    style: style
  }, employee.EmployeeType), /*#__PURE__*/React.createElement("td", {
    style: style
  }, employee.CurrentStatus));
}
const EmployeeTable = ({
  allEmployees
}) => {
  const style = {
    border: "1px solid red",
    "font-size": "20px"
  };
  const allEmployeesRows = allEmployees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
    employee: employee,
    style: style
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Welcome to the Employee Table"), /*#__PURE__*/React.createElement("table", {
    style: style
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: style
  }, "ID"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "First Name"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Last Name"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Age"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Date of joining"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Title"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Department"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Employee Type"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Current Status"))), /*#__PURE__*/React.createElement("tbody", null, allEmployeesRows)));
};
const EmployeeCreate = ({
  AddSingleEmployee
}) => {
  const [errMsgFname, setErrMsgFname] = React.useState("");
  const [errMsgLname, setErrMsgLname] = React.useState("");
  const [errMsgAge, setErrMsgAge] = React.useState("");
  const [errMsgJoiningDate, setErrMsgJoiningDate] = React.useState("");
  const handleSubmit = e => {
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
    };
    console.log(`fName>>>>>>>>>123:`, form.dateOfJoining.value);
    if (!form.firstName.value.trim()) {
      setErrMsgFname("First Name required.");
      isValidSubmission = false;
    }
    if (!form.lastName.value.trim()) {
      setErrMsgLname("Last Name required.");
      isValidSubmission = false;
    }
    if (!form.age.value.trim()) {
      setErrMsgAge("Age is required.");
      isValidSubmission = false;
    }
    if (!form.dateOfJoining.value) {
      setErrMsgJoiningDate("Joining Date is required.");
      isValidSubmission = false;
    }
    console.log('J date: ', new Date(form.dateOfJoining.value));
    console.log('Allow : ', new Date(new Date().setYear(new Date().getYear() - 30)));
    if (new Date(form.dateOfJoining.value) < new Date(new Date().setYear(new Date().getYear() - 30))) {
      setErrMsgJoiningDate("Joining Date can not be greater than 30 years.");
      isValidSubmission = false;
    }
    if (new Date(form.dateOfJoining.value) > new Date()) {
      setErrMsgJoiningDate("Joining Date can not be future date.");
      isValidSubmission = false;
    }

    // Regex Validations
    if (!nameRegex.test(form.firstName.value.trim())) {
      setErrMsgFname("Valid First Name required.");
      isValidSubmission = false;
    }
    if (!nameRegex.test(form.lastName.value.trim())) {
      setErrMsgLname("Valid Last Name required.");
      isValidSubmission = false;
    }
    if (form.age.value < 20 || form.age.value > 70) {
      setErrMsgAge("Age should be between 20 to 70.");
      isValidSubmission = false;
    }
    if (isValidSubmission) AddSingleEmployee(singleEmployee);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Welcome to the Employee Creation Form"), /*#__PURE__*/React.createElement("div", {
    class: "container"
  }, /*#__PURE__*/React.createElement("form", {
    name: "addEmployee",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-25"
  }, /*#__PURE__*/React.createElement("label", {
    for: "firstName"
  }, "First Name:")), /*#__PURE__*/React.createElement("div", {
    className: "col-75"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "firstName",
    name: "firstName"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "red"
    }
  }, errMsgFname))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-25"
  }, /*#__PURE__*/React.createElement("label", {
    for: "lastName"
  }, "Last Name:")), /*#__PURE__*/React.createElement("div", {
    className: "col-75"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "lastName",
    name: "lastName"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "red"
    }
  }, errMsgLname))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-25"
  }, /*#__PURE__*/React.createElement("label", {
    for: "age"
  }, "Age:")), /*#__PURE__*/React.createElement("div", {
    className: "col-75"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "age",
    name: "age"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "red"
    }
  }, errMsgAge))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-25"
  }, /*#__PURE__*/React.createElement("label", {
    for: "dateOfJoining"
  }, "Date of joining:")), /*#__PURE__*/React.createElement("div", {
    className: "col-75"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    id: "dateOfJoining",
    name: "dateOfJoining"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "red"
    }
  }, errMsgJoiningDate))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-25"
  }, /*#__PURE__*/React.createElement("label", {
    for: "title"
  }, "Title:")), /*#__PURE__*/React.createElement("div", {
    className: "col-75"
  }, /*#__PURE__*/React.createElement("select", {
    name: "title",
    id: "title"
  }, /*#__PURE__*/React.createElement("option", {
    value: "Employee"
  }, "Employee"), /*#__PURE__*/React.createElement("option", {
    value: "Manager"
  }, "Manager"), /*#__PURE__*/React.createElement("option", {
    value: "Director"
  }, "Director"), /*#__PURE__*/React.createElement("option", {
    value: "VP"
  }, "VP")))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-25"
  }, /*#__PURE__*/React.createElement("label", {
    for: "department"
  }, "Department:")), /*#__PURE__*/React.createElement("div", {
    className: "col-75"
  }, /*#__PURE__*/React.createElement("select", {
    name: "department",
    id: "department"
  }, /*#__PURE__*/React.createElement("option", {
    value: "IT"
  }, "IT"), /*#__PURE__*/React.createElement("option", {
    value: "Marketing"
  }, "Marketing"), /*#__PURE__*/React.createElement("option", {
    value: "HR"
  }, "HR"), /*#__PURE__*/React.createElement("option", {
    value: "Engineering"
  }, "Engineering")))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-25"
  }, /*#__PURE__*/React.createElement("label", {
    for: "employeeType"
  }, "Employee Type:")), /*#__PURE__*/React.createElement("div", {
    className: "col-75"
  }, /*#__PURE__*/React.createElement("select", {
    name: "employeeType",
    id: "employeeType"
  }, /*#__PURE__*/React.createElement("option", {
    value: "FullTime"
  }, "FullTime"), /*#__PURE__*/React.createElement("option", {
    value: "PartTime"
  }, "PartTime"), /*#__PURE__*/React.createElement("option", {
    value: "Contract"
  }, "Contract"), /*#__PURE__*/React.createElement("option", {
    value: "Seasonal"
  }, "Seasonal")))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-25"
  }, /*#__PURE__*/React.createElement("label", {
    for: "currentStatus"
  }, "Current Status:")), /*#__PURE__*/React.createElement("div", {
    className: "col-75"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "currentStatus",
    name: "currentStatus",
    value: "1",
    disabled: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Submit"
  })))));
};
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
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(async response => {
      let tempEmployees = await response.json();
      let tempDirectory = tempEmployees.data.employeeDirectory;
      setAllEmployees(tempDirectory);
    });
  }
  React.useEffect(() => {
    fetchData();
  }, []);
  const AddSingleEmployee = singleEmployee => {
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
      headers: {
        'Content-Type': 'application/json'
      },
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
          CurrentStatus: singleEmployee.CurrentStatus
        }
      })
    }).then(async response => {
      await response.json();
      fetchData();
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EmployeeSearch, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, {
    allEmployees: allEmployees
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeCreate, {
    AddSingleEmployee: AddSingleEmployee
  }));
};
const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render( /*#__PURE__*/React.createElement(EmployeeDirectory, null));