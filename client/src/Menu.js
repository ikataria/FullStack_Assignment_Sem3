import { BrowserRouter, Link } from "react-router-dom";
import PageRoutes from "./PageRoutes"; 

function Menu() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <h1>Employee Management System</h1>
                </nav>
                <PageRoutes/>                
            </div>
        </BrowserRouter>
    )
}

export default Menu;