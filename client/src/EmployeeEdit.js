import { useParams } from "react-router-dom";

function EmployeeEdit() {
    const {id} = useParams();
    
    return (
        <div>
            <h3>Welcome to Employee edit</h3>
        </div>
    )
}
export default EmployeeEdit;