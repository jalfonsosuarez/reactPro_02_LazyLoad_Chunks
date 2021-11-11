
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom';

import logo from '../logo.svg';
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/" end
                                className={({ isActive }) =>
                                    (isActive ? "nav-active" : "")
                                }>Shopping</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" end
                                className={({ isActive }) =>
                                    (isActive ? "nav-active" : "")
                                }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" end
                                className={({ isActive }) =>
                                    (isActive ? "nav-active" : "")
                                }>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/" element={<ShoppingPage />} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/users" element={<h1>Users</h1>} />
                </Routes>
            </div>
        </Router>
    );
}
