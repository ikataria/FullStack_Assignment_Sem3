import { BrowserRouter, Link } from "react-router-dom";
import PageRoutes from "./PageRoutes"; 

function Menu() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <h3>Employee Management System</h3>
                </nav>
                <PageRoutes/>                
            </div>
        </BrowserRouter>
    )
}

export default Menu;