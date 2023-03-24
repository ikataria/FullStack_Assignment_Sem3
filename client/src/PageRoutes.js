import {Route, Routes } from "react-router-dom";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeDirectory from "./EmployeeDirectory";
// import IssueFilter from "./IssueFilter";
// import IssueList from "./IssueList";
// import IssueEdit from "./IssueEdit";

function pageRoutes() {
    return (
        <Routes>
            <Route path='/search' element={<EmployeeSearch/>} />
            <Route path='/' element={<EmployeeDirectory/>} />
            {/* <Route path='/list' element={<IssueList/>} /> */}
            {/* <Route path='/edit/:id' element={<IssueEdit/>} /> */}
        </Routes>
    )
}

export default pageRoutes;