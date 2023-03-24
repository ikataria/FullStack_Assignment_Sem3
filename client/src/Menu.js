import { BrowserRouter, Link } from "react-router-dom";
import PageRoutes from "./PageRoutes"; 

function Menu() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <h3>Welcome to EMS</h3>
                    <Link to="/">Home</Link>
                    {' | '}
                    <Link to="/list">List</Link>
                </nav>

                <PageRoutes/>                
            </div>
        </BrowserRouter>
    )
}

export default Menu;