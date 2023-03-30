import { BrowserRouter, Link } from "react-router-dom";
import PageRoutes from "./PageRoutes"; 

function Menu() {
    return (
        <BrowserRouter>
            <div>
                <h1>Employee Management System</h1>
                <nav>
                    <Link style={{"fontSize":"20px", "font-weight": "700"}} to="/">Home</Link>
                        {' | '}
                    <Link style={{"fontSize":"20px", "font-weight": "700"}} to="/list">List</Link>
                </nav>
                <PageRoutes/>                
            </div>
        </BrowserRouter>
    )
}

export default Menu;