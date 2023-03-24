import {Route, Routes } from "react-router-dom";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeDirectory from "./EmployeeDirectory";
import EmployeeEdit from "./EmployeeEdit";
// import IssueFilter from "./IssueFilter";
// import IssueList from "./IssueList";
// import IssueEdit from "./IssueEdit";

function pageRoutes() {
    return (
        <Routes>
            <Route path='/search' element={<EmployeeSearch/>} />
            <Route path='/' element={<EmployeeDirectory/>} />
            {/* <Route path='/list' element={<IssueList/>} /> */}
            <Route path='/edit/:id' element={<EmployeeEdit/>} />
        </Routes>
    )
}

export default pageRoutes;