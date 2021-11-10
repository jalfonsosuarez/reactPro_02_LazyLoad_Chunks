
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const Navigation = () => {

    return (
        <>
            <h2>LazyLayout pages</h2>
            <ul>
                <li>
                    <Link to={'lazy1'}>Lazy Page 1</Link>
                </li>
                <li>
                    <Link to={'lazy2'}>Lazy Page 2</Link>
                </li>
                <li>
                    <Link to={'lazy3'}>Lazy Page 3</Link>
                </li>
            </ul>
            <Routes>
                <Route path='lazy1' element={<LazyPage1 />}></Route>
                <Route path='lazy2' element={<LazyPage2 />}></Route>
                <Route path='lazy3' element={<LazyPage3 />}></Route>
                <Route path="*" element={<Navigate replace to={'lazy1'} />}></Route>
            </Routes>
        </>
    )
}
