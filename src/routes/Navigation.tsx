
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom';

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';


import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
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
                        <li>
                            <NavLink to="/home" end
                                className={({ isActive }) =>
                                    (isActive ? "nav-active" : "")
                                }>Home</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/about" element={ <h1>About</h1> } />
                    <Route path="/users" element={ <h1>Users</h1> } />
                    <Route path="/home"  element={ <h1>Home</h1> } />
                </Routes>
            </div>
        </Router>
    );
}
