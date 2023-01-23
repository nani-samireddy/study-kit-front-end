import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css';
import { CurrentExamContext } from '../context/currentExamContext';

const AppLayout = () => {
    
    return (
        <div className="App">
            <CurrentExamContext.Provider>
                <Navbar />
                <div className="content">
                    <Outlet />
                </div>
            </CurrentExamContext.Provider>
        </div>
    );
}

export default AppLayout;