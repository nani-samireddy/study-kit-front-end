import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css';

const AppLayout = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default AppLayout;